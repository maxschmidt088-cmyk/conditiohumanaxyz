import { useState } from 'react';

const content = {
  EN: {
    texts: [
      "if you're reading this, you are already participating.",
      "life feels different since we all just stare at our devices, reality is shifting, algorithms dictate our taste, routines, our worldviews.",
      "the antidote is simple, it's waking up, becoming conscious and dragging your focus back into the three dimensional realm (xyz).",
      "now look around, is there something that captured your attention, even just for a second? take a photo or record a short video.",
      "become more present, through documenting life on earth, the trash bag in the wind, cats on the street, the ocean in the morning."
    ],
    ig: "@conditio.humana.xyz"
  },
  ES: {
    texts: [
      "si estás leyendo esto, ya estás participando.",
      "la vida se siente diferente desde que todos miramos nuestros dispositivos, la realidad está cambiando, los algoritmos dictan nuestros gustos, rutinas y visión del mundo.",
      "el antídoto es simple: despertar, tomar conciencia y devolver tu atención al reino tridimensional (xyz).",
      "ahora mira a tu alrededor, ¿hay algo que haya capturado tu atención, aunque sea por un segundo? toma una foto o graba un vídeo corto.",
      "hazte más presente documentando la vida en la tierra, la bolsa en el viento, los gatos en la calle, el océano por la mañana."
    ],
    ig: "@conditio.humana.xyz"
  },
  FR: {
    texts: [
      "si vous lisez ceci, vous participez déjà.",
      "la vie semble différente depuis que nous fixons tous nos appareils, la réalité change, les algorithmes dictent nos goûts, nos habitudes et notre vision du monde.",
      "l'antidote est simple : se réveiller, prendre conscience et ramener son attention dans le monde tridimensionnel (xyz).",
      "regardez autour de vous, quelque chose a-t-il attiré votre attention, même une seconde ? prenez une photo ou filmez une courte vidéo.",
      "soyez plus présent en documentant la vie sur terre, le sac dans le vent, les chats dans la rue, l'océan au petit matin."
    ],
    ig: "@conditio.humana.xyz"
  },
  JP: {
    texts: [
      "これを読んでいる時点で、あなたはすでに参加しています。",
      "誰もがデバイスを見つめるようになってから、日々の感覚は変わりました。現実は移ろい、アルゴリズムが私たちの好みや習慣、世界の見方まで決めています。",
      "解毒剤はシンプルです。目を覚まし、意識を向け、三次元の世界（xyz）へと注意を引き戻すこと。",
      "さあ、周りを見てください。ほんの一秒でも、目を奪われるものはありますか？写真を撮るか、短い動画を残してみましょう。",
      "風に舞う袋、通りの猫、朝の海。地球での暮らしを記録しながら、今この瞬間に意識を向けて。"
    ],
    ig: "@conditio.humana.xyz"
  }
};

type Lang = 'EN' | 'ES' | 'FR' | 'JP';

export default function App() {
  const [lang, setLang] = useState<Lang>('EN');
  const activeContent = content[lang];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      color: '#B7B7B5',
      fontFamily: "Georgia, serif",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px 24px',
      boxSizing: 'border-box',
      maxWidth: '480px',
      margin: '0 auto'
    }}>
      {/* Sprachauswahl Oben */}
      <div style={{ display: 'flex', gap: '24px', fontFamily: "system-ui, -apple-system, sans-serif", fontSize: '16px', letterSpacing: '1px' }}>
        {(['EN', 'ES', 'FR', 'JP'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              color: '#000000',
              padding: 0,
              borderBottom: lang === l ? '1.5px solid #000000' : 'none',
              paddingBottom: '2px'
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Mittlerer Textfluss */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', fontStyle: 'italic', fontSize: '26px', lineHeight: '31.7px', textAlign: 'left', margin: '40px 0' }}>
        {activeContent.texts.map((t, idx) => (
          <p key={idx} style={{ margin: 0 }}>{t}</p>
        ))}
      </div>

      {/* Footer / Instagram Link */}
      <div>
        <a 
          href="https://www.instagram.com/conditio.humana.xyz?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-link"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            fontStyle: 'italic',
            transition: 'color 0.3s ease'
          }}
        >
          {activeContent.ig}
        </a>
        
        <style>{`
          .instagram-link {
            color: #B7B7B5;
          }
          .instagram-link:hover {
            color: #000000;
          }
        `}</style>
      </div>
    </div>
  );
}
