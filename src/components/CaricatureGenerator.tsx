import { useMemo, useState } from 'react';
import UploadZone from './UploadZone';

export default function CaricatureGenerator() {
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState('Create a caricature of me as a futuristic creative director.');
  const [style, setStyle] = useState('classic-cartoon');
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle');

  const mockImage = useMemo(
    () =>
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#4F46E5"/>
              <stop offset="100%" stop-color="#F59E0B"/>
            </linearGradient>
          </defs>
          <rect width="800" height="500" fill="url(#g)"/>
          <circle cx="290" cy="220" r="110" fill="#fff" fill-opacity="0.2"/>
          <circle cx="500" cy="220" r="140" fill="#fff" fill-opacity="0.15"/>
          <text x="50%" y="82%" text-anchor="middle" fill="#fff" font-size="36" font-family="Arial">AI Caricature Preview (Mockup)</text>
        </svg>`
      ),
    []
  );

  const startGeneration = () => {
    setStatus('generating');
    if (typeof window !== 'undefined') {
      window.gtag?.('event', 'generate_caricature', { style });
    }
    window.setTimeout(() => setStatus('done'), 1700);
  };

  return (
    <section className="section-card p-5 sm:p-8">
      <UploadZone onFileSelected={setFile} />

      <div className="mt-5 grid gap-4">
        <label className="text-sm font-semibold text-ink" htmlFor="prompt">
          Prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          rows={3}
          className="w-full rounded-action border border-border p-3 text-sm text-ink outline-none ring-primary/20 focus:ring"
        />

        <label className="text-sm font-semibold text-ink" htmlFor="style">
          Style
        </label>
        <select
          id="style"
          value={style}
          onChange={(event) => setStyle(event.target.value)}
          className="h-12 rounded-action border border-border px-3 text-sm text-ink"
        >
          <option value="classic-cartoon">Classic Cartoon</option>
          <option value="comic-exaggerated">Comic Exaggerated</option>
          <option value="editorial-illustration">Editorial Illustration</option>
        </select>

        <button
          type="button"
          className="h-12 rounded-action bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
          onClick={startGeneration}
          disabled={status === 'generating' || !file || !prompt.trim()}
        >
          {status === 'generating' ? 'Generating...' : 'Generate Caricature'}
        </button>

        <div className="grid grid-cols-1 gap-2 text-xs text-muted sm:grid-cols-3">
          <span>✓ Free to use</span>
          <span>✓ No signup required</span>
          <span>✓ Instant result</span>
        </div>
      </div>

      {status !== 'idle' ? (
        <div className="mt-6 overflow-hidden rounded-card border border-border bg-white">
          <img
            src={mockImage}
            alt="AI caricature result preview"
            className="h-auto w-full"
            loading="lazy"
            width={800}
            height={500}
          />
          <div className="flex items-center justify-between gap-3 p-4">
            <p className="text-sm text-muted">
              {status === 'generating'
                ? 'Generating your caricature mockup...'
                : 'Your caricature mockup is ready for download.'}
            </p>
            <button
              type="button"
              className="h-10 rounded-action bg-secondary px-4 text-sm font-semibold text-white"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.gtag?.('event', 'download_caricature');
                }
              }}
              disabled={status !== 'done'}
            >
              Download
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
