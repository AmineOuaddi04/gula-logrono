export type PhotoAsset = {
  src: string | null;
  srcSet?: string;
  alt: string;
  position?: string;
};

export default function BrandPhoto({ asset, slot, words, priority = false }: {
  asset?: PhotoAsset;
  slot: string;
  words: string[];
  priority?: boolean;
}) {
  return <div className={`brand-photo ${asset?.src ? 'has-photo' : 'photo-awaiting-brand'}`} data-asset-slot={slot}>
    {asset?.src ? <img src={asset.src} srcSet={asset.srcSet} sizes="(max-width: 700px) 100vw, 60vw" alt={asset.alt}
      loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async"
      width="1200" height="1400" style={{ objectPosition: asset.position ?? 'center' }} /> :
      <div className="type-art" aria-hidden="true">{words.map((word, i) => <span key={i}>{word}</span>)}</div>}
  </div>;
}
