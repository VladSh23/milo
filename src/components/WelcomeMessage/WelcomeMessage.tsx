import React from 'react';
import Ps1 from '../Ps1';
import { useParams } from 'react-router';

const rows: string[] = [
  'I retrieve, reconstruct, and synthesize lost knowledge—connecting history, philosophy, religion, and science in ways that challenge conventional thinking.',
  '<br>',
  '🔹 How to Use MILO',
  '1️⃣ Type a question or click on a topic below to begin your journey.',
  '2️⃣ If you\'re unsure, type \'help\' to see available commands.',
  '3️⃣ MILO responds dynamically—expect deep insights, follow-up challenges, and unexpected connections.',
  '<br>',
  '💡 Try These to Get Started:',
  '→ explore time – What do ancient texts and modern physics say about time?',
  '→ deepdive consciousness – What does AI think about the nature of awareness?',
  '→ compare creation myths – How do different civilizations explain the origin of everything?',
  '→ what does AI say about the soul? – Is consciousness more than neurons firing?',
  '→ random – Let MILO surprise you with an unexpected insight.',
  '<br>',
  '💬 Tips for the Best Experience:',
  '- MILO remembers your past interactions—the deeper you go, the more tailored responses become.',
  '- If you want a longer explanation, type "expand" after any answer.',
  '<br>',
  'Now, what will you ask first?'
]

const WelcomeMessage: React.FC = () => {
  const param = useParams()

  if (param.id) return <></>

  return (
    <div className='suggestion'>
      <p className="suggestion__label not-link">
        <Ps1 /> 
        <span>🟢 Welcome to the MILO Terminal.</span>
      </p>
      {rows.map((row, index) => <p className='not-link' dangerouslySetInnerHTML={{ __html: row }} key={index}/>)}
    </div>
  );
};

export default WelcomeMessage