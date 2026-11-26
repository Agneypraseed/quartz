
Model Context Protocol

MCP offers a consistent protocol for linking AI models to external capabilities (data sources, tools, and environments) allowing for the transfer of information and capabilities while maintaining appropriate safety and control mechanisms.

The **M × N Integration Problem** 
One of the main problems that MCP (Model Context Protocol) was designed to solve. It describes how the number of custom integrations grows when multiple AI applications need to connect to multiple tools or data sources.

![[Pasted image 20261123202913.png]]

- Duplicated code, different API interfaces, and increased maintenance effort.

MCP introduces a **standard communication protocol**. Each AI application implements an MCP client, while each external service exposes an MCP server.

MCP transforms this into an M+N problem.

![[Pasted image 20261123204828.png]]

Each AI application implements the client side of MCP once, and each tool/data source implements the server side once.
### Components
MCP has a client and a server

![[Pasted image 20261123212540.png|442]]![[Pasted image 20261123212652.png|215]]

- **Client**: A component within the host application that manages communication with a specific MCP Server. Each Client maintains a 1:1 connection with a single Server, handling the protocol-level details of MCP communication and acting as an intermediary between the Host’s logic and the external Server.
- **Server**: An external program or service that exposes capabilities (Tools, Resources, Prompts) via the MCP protocol.

**Host**
The **Host** is the user-facing AI application that manages interactions between the user, LLM, and MCP clients.
**Examples:** ChatGPT, Claude Desktop, Cursor, and custom AI agents.

A single **Host** can connect to multiple **Servers** simultaneously via different **Clients**. New **Servers** can be added to the ecosystem without requiring changes to existing **Hosts**. Capabilities can be easily composed across different **Servers**.

MCP uses **JSON-RPC 2.0** as the message format for all communication between Clients and Servers. JSON-RPC is a lightweight remote procedure call protocol encoded in JSON. 

```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "weather",
    "arguments": {
      "location": "San Francisco"
    }
  }
}
```

JSON-RPC defines the message format, while transport mechanisms define how messages are exchanged between MCP Clients and Servers.

stdio (Standard Input/Output)**
- Used for local communication between processes on the same machine.
- The Host launches the Server as a subprocess.
- Communication occurs through standard input (`stdin`) and standard output (`stdout`).
- **Use cases:** Local filesystem access and script execution.

**Streamable HTTP**
- Used primarily for remote communication between Clients and Servers.
- Communication occurs over HTTP.
- Supports Server-Sent Events (SSE) for streaming server responses.
- **Use cases:** Remote APIs, cloud services and shared resources.

---

MCP’s can connect with any software service, however, many AI applications require similar capabilities, making certain types of MCP servers particularly useful.

- **Tools:** Executable functions exposed by an MCP server to perform actions or computations.
	
```python
	
	CLIENT
	result = await client.call_tool(
    "get_weather",
    {"location": "Berlin"}
	)
	
	SERVER
	@mcp.tool()
	def get_weather(location: str) -> dict:
	    """Get the current weather for a specified location."""
	    return {
	        "temperature": 72,
	        "conditions": "Sunny",
	        "humidity": 45
	    }

```


- **Resources:**  Retrieve context
	- Read-only data sources that provide context to the AI model.
		```python
		CLIENT
		result = await client.read_resource(
	    "file:///research/paper.txt"
			)
		
		SERVER
		@mcp.resource("file:///research/paper.txt")
		def read_file() -> str:
		    """Read the research paper."""
		    with open("research/paper.txt", "r") as f:
		        return f.read()	
		```
				
- **Prompts:** Retrieve instructions
	- Predefined templates that guide the AI model in performing specific tasks.
```python
	
	CLIENT
	result = await client.get_prompt(
    "code_review",
    {
        "language": "Python",
        "code": "def add(a, b): return a + b"
    }
	)
	
	SERVER
	@mcp.prompt()
	def code_review(code: str, language: str) -> str:
	    """Generate a code review prompt."""
	    return (
	        f"Review the following {language} code for "
	        f"best practices, potential issues and improvements."
	        f"\n\n{code}"
	    )
	

```
		


- **Sampling:** Request LLM inference
	- A mechanism that allows an MCP server to request LLM inference through the client or host.

	```python
	
	SERVER
	@mcp.tool()
	async def analyze_data(data: str, ctx: Context) -> str:
	    result = await ctx.session.create_message(
	        messages=[
	            SamplingMessage(
	                role="user",
	                content=TextContent(
	                    type="text",
	                    text=f"Analyze this data: {data}"
	                )
	            )
	        ],
	        max_tokens=500
	    )
	
	    return result.content.text
	
	```

![[Pasted image 20261125170846.png|700]]

**Human-in-the-loop:** The Host can allow users to review, modify, or reject sampling requests and responses, maintaining control over LLM interactions.

MCP SDK

**MCP SDK** is a library that provides the necessary components to develop MCP Clients and Servers without implementing the underlying protocol from scratch.

The MCP SDK automatically converts programming objects into JSON-RPC messages for transmission (**serialization**) and converts received JSON-RPC messages back into programming objects (**deserialization**).

When you write:

```python
await client.call_tool(
    "get_weather",{"location": "Berlin"}
    )
```

The SDK automatically constructs and serializes a JSON-RPC message like this:

```json
{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
        "name": "get_weather",
        "arguments": {
            "location": "Berlin"
        }
    },
    "id": 1
}
```




