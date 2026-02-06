import { useRef, useState, DragEvent } from 'react';

type Props = {
  onFileSelected: (file: File | null) => void;
};

export default function UploadZone({ onFileSelected }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const selectFile = (file: File | null) => {
    setFileName(file?.name ?? '');
    onFileSelected(file);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0] ?? null;
    selectFile(file);
  };

  return (
    <div
      className={`rounded-card border-2 border-dashed p-6 text-center transition sm:p-8 ${
        isDragging ? 'border-primary bg-indigo-50' : 'border-border bg-slate-50'
      }`}
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(event) => selectFile(event.target.files?.[0] ?? null)}
      />
      <p className="text-base font-semibold text-ink">Drop your photo here or click to upload</p>
      <p className="mt-2 text-sm text-muted">JPG, PNG, WebP up to 10MB</p>
      <button
        type="button"
        className="mt-4 h-12 rounded-action bg-white px-5 text-sm font-semibold text-primary ring-1 ring-primary/30 hover:bg-indigo-50"
        onClick={() => inputRef.current?.click()}
      >
        Choose Photo
      </button>
      {fileName ? <p className="mt-3 text-sm text-muted">Selected: {fileName}</p> : null}
    </div>
  );
}
