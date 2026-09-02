# Flowly

A private, local-first visual explanation tool inspired by diagramming canvases. Enter a prompt and Flowly turns it into an animated four-step flow with context-aware icons.

## Open the website

There is no installation or terminal setup required:

- **Windows:** double-click `Open Flowly.bat`.
- **macOS:** double-click `Open Flowly.command`. If macOS blocks it the first time, right-click it and choose **Open**.
- **Any system:** you can also double-click `index.html`; Flowly is a fully client-side website.

The launcher starts the local server, chooses another port automatically if `4173` is already occupied, and opens the correct address in your default browser. Keep the launcher window open while using Flowly.

### Terminal alternative

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173` on the **same computer** where that command is running.

No build step, account, API key, or external backend is required. Recent prompts are stored in the browser with `localStorage`.

## Built-in demo

Select **Watch a quick demo** on the welcome screen (or **Demo** in the header). Flowly will generate an internet explanation and animate through each step. You can also open `index.html?demo=1` to start the demo automatically.
