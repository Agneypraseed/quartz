Contrastive Language Image Pretraining [https://arxiv.org/pdf/2103.00020]

Motivation
A model can encounter a task **without being specifically trained on that task**. GPT-3 was a major demonstration of this idea. 

"Could scalable pre-training methods which learn directly from web text result in a similar breakthrough in computer vision?"

Previous vision-language work showed that image-associated text can help vision models, but performance was poor. CLIP asks whether scaling this idea massively, with modern architectures and contrastive learning, can produce a genuinely useful zero-shot vision model.

**Literature review**

| Paper                                                                                   | Core idea                                                                                                                 | Work                                                                                                                                |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Joulin et al. (2016)** — _Learning Visual Features from Large Weakly Supervised Data_ | Train a CNN to predict words from image-associated metadata such as titles, descriptions, and hashtags                    | **Large-scale weak language supervision can learn useful visual representations.** Important early precursor to CLIP.               |
| **Li et al. (2017)** — _Learning from Noisy Web Data for Fine-Grained Classification_   | Extend word prediction to **phrase n-grams** and use the learned visual n-grams to perform zero-shot image classification | **Language can provide a bridge to zero-shot visual classification.** Moves beyond individual words toward richer textual concepts. |
| **VirTex — Desai & Johnson (2020)**                                                     | Learn visual representations from image-caption pairs using **language modeling**                                         | **Use image-caption data to train visual representations through a language-modeling objective.**                                   |
| **ICMLM — Sariyildiz et al. (2020)**                                                    | Learn image representations using **masked language modeling** over image-caption pairs                                   | **BERT-style masked language modeling can provide supervision for visual representation learning.**                                 |
| **ConVIRT — Zhang et al. (2020)**                                                       | Learn image and text representations by bringing **paired image/text embeddings together with contrastive learning**      | **Direct conceptual predecessor to CLIP.** CLIP simplifies and massively scales this contrastive image-text approach.               |

Raw web data provides enormous amounts of naturally occurring supervision without manually labeling every example.

CLIP (Contrastive Language-Image Pre-training) objective : 
Learn a shared representation space where matching images and text are close together and mismatching ones are far apart.

Earlier apporaches
**Two different ways of scaling vision pretraining without manually labeling every image**.

1. Mahajan et al. — Instagram hashtags
		ImageNet requires humans to assign labels, Instagram users were already providing **hashtags**. 
		Trained on up to 3.5 billion Instagram photos
		They use the hashtags as noisy labels. The labels are **weak** because hashtags aren't necessarily accurate visual description.

2. Kolesnikov et al. / Dosovitskiy et al. — JFT-300M
		**JFT-300M**, a huge dataset containing roughly 300 million images with **noisy labels**
		The JFT used **18,291 categories**.

These approaches proved that we can scale beyond ImageNet using noisy/weak supervision. But they're still constrained by predefined classes. The model can only directly predict concepts that were included in that predefined vocabulary.

ConVIRT demonstrates that contrastive image-text representation learning works. 


CLIP asks what happens when you massively scale this paradigm with web-scale data and modern architectures.
CLIP argues that natural language provides a far more general and dynamic supervision space, allowing the concepts being predicted to be defined at inference time rather than fixed during training.

"CLIP, similar to the GPT family, learns to perform a wide set of tasks during pre-training including OCR, geo-localization, action recognition, and many others."

---

