import React from 'react'

const textBlocks: string[] = [
  'At its core, <strong>open source is the antithesis of centralized control—it is an evolutionary system where knowledge, technology, and innovation emerge not from a single authority, but from the collective effort of many</strong>. It is a recognition that progress is not dictated, but discovered; not owned, but shared. In a first-principles sense, <strong>open source is the application of decentralized intelligence to problem-solving, where the best ideas survive through collaboration, iteration, and continuous refinement</strong>. Unlike proprietary systems, which lock knowledge within institutions and dictate its use, open source allows any individual to <strong>expand, improve, and challenge the underlying structure of a system, ensuring that no single entity can halt its growth</strong>. This principle has driven some of the most transformative technological shifts—<strong>from the Linux operating system that powers global infrastructure to Bitcoin decentralizing finance and the internet itself evolving through open protocols</strong>. MILO applies this philosophy to knowledge itself: a system that is <strong>not just consumed but co-created, where intelligence is reconstructed collectively, and where access to truth is not a privilege but a process that belongs to everyone.</strong>',
  '<strong>If you are a developer, AI engineer, or researcher, you can contribute by:</strong>',
  '<strong>Integrating Additional AI Models</strong> – MILO is model-agnostic, meaning it can support OpenAI GPT, DeepSeek, Llama, Mistral, and any other LLM. You can fine-tune new models, optimize MILO for specific domains, or introduce multimodal AI capabilities (text-to-image, voice analysis, etc.).',
  '<strong>Enhancing the Knowledge Graph</strong> – MILO’s strength lies in retrieving and synthesizing knowledge across disciplines. You can contribute by structuring new datasets, improving semantic search efficiency, and expanding the vectorized knowledge base with new sources.',
  '<strong>Developing Validation & Citation Tracking Layers</strong> – AI models are only as good as their verification mechanisms. MILO currently operates on prebuilt LLM APIs, meaning it lacks a formal validation protocol. By implementing citation-tracking tools, peer-reviewed verification layers, and historical accuracy checks, developers can make MILO a reliable knowledge engine rather than a generative probability model.',
  '<strong>Decentralizing Knowledge Storage</strong> – Centralized data can be altered, erased, or censored. By moving MILO’s knowledge graph to IPFS, Arweave, or decentralized data networks, contributors can ensure that knowledge remains permanent, censorship-resistant, and universally accessible.',
  '<strong>Creating New AI Agents & Research Tools</strong> – MILO is designed to be modular, meaning developers can build on top of it. Whether it’s a legal history AI, a theological discourse agent, or a quantum mechanics reasoning system, MILO can serve as a foundation for AI-driven research tools that do not yet exist.'
]

const OpenSource: React.FC = () => {
  return (
    <div id='open-source' className='thesis-container'>
      <h2>Open Source</h2>
      {textBlocks.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item }} className='thesis-container__text-block' />
      ))}
    </div>
  )
}

export default OpenSource