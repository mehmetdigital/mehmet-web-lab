const input = document.getElementById('imageInput');
const status = document.getElementById('uploadStatus');
const slots = [
  document.getElementById('previewA'),
  document.getElementById('previewB'),
  document.getElementById('previewC')
];

input.addEventListener('change', () => {
  const files = Array.from(input.files).slice(0, 3);

  slots.forEach((slot, index) => {
    slot.innerHTML = `<span>Görsel ${index + 1}</span>`;
    const file = files[index];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const img = document.createElement('img');
    img.src = url;
    img.alt = `Seçilen görsel ${index + 1}`;
    slot.innerHTML = '';
    slot.appendChild(img);
  });

  status.textContent = files.length
    ? `${files.length} görsel önizlemeye alındı. Bu işlem dosyayı kalıcı olarak internete yüklemez.`
    : 'En fazla 3 görsel seçebilirsin.';
});
