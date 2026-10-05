// @ts-ignore
import script from "./scripts/curriculum.inline"
import style from "./styles/curriculum.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CurriculumControls: QuartzComponent = () => null
CurriculumControls.afterDOMLoaded = script
CurriculumControls.css = style

export default (() => CurriculumControls) satisfies QuartzComponentConstructor
