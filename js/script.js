// Clicking the credit line copies a ready-to-paste footer credit
// for client projects.
document.addEventListener('DOMContentLoaded', () => {
  const credit = document.getElementById('credit');
  if (!credit) return;

  const url = window.location.href.split('#')[0];
  const snippet = `Made & powered by Prem — ${url}`;
  const defaultLabel = credit.textContent;

  credit.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      credit.textContent = 'Copied — paste in your footer';
    } catch (err) {
      credit.textContent = url;
    }

    clearTimeout(credit._resetTimer);
    credit._resetTimer = setTimeout(() => {
      credit.textContent = defaultLabel;
    }, 2200);
  });
});