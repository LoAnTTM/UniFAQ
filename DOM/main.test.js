/**
 * @jest-environment jsdom
 */
const { loadData, renderData } = require('./main.js');

describe('UniFAQ state handling', () => {
  beforeEach(() => {
    // giả lập HTML mà main.js đang dùng
    document.body.innerHTML = '<div id="content"></div>';
  });

  test('renders FAQ data correctly', () => {
    const sampleData = [
      { question: 'What is UniFAQ?', answer: 'A FAQ system.' },
      { question: 'How to use it?', answer: 'Simply browse the questions.' }
    ];

    renderData(sampleData);

    const html = document.getElementById('content').innerHTML;
    expect(html).toContain('What is UniFAQ?');
    expect(html).toContain('A FAQ system.');
  });

  test('shows Empty state when data is empty', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    await loadData();

    expect(document.getElementById('content').textContent)
      .toBe('Empty state: No FAQs available.');
  });

  test('shows Error state when fetch fails', async () => {
    global.fetch = jest.fn(() => Promise.reject('Fetch error'));

    await loadData();

    expect(document.getElementById('content').textContent)
      .toBe('Error state: Failed to fetch data.');
  });
});
