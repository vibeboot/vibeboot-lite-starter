# CLAUDE.md

@AGENTS.md

## Claude Code only

Shared project rules live in AGENTS.md, imported above, including the Next.js `nextjs-agent-rules` block that `next dev` writes there. Keep `@AGENTS.md` as the first line after the title. Cursor, Codex and other agents read AGENTS.md and do not read this file, so do not put shared rules here, and do not copy that Next.js block into this file.

If you run `/init`, keep the import line. Current Claude Code suggests improvements when a CLAUDE.md already exists rather than overwriting it, but still review any proposal so the import and this section stay intact.

### Settings, hooks and permissions

Project settings, permissions and hooks live in `.claude/settings.json` (commit this file if you add one). Personal overrides go in `.claude/settings.local.json`, which should stay out of git. Browse hooks in a session with `/hooks`.

A hook can format files after Claude edits them. This `PostToolUse` example comes from the official Claude Code hooks guide. Only add it if you actually use Prettier, and change the command if you use a different formatter.

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write"
          }
        ]
      }
    ]
  }
}
```

### Slash commands and skills

Custom slash commands can live as Markdown files in `.claude/commands/` (a file named `deploy.md` becomes `/deploy`). That older format still works. For new ones, prefer a skill at `.claude/skills/<name>/SKILL.md`, which also supports supporting files.

### Memory

Auto memory is notes Claude writes from your corrections. It is separate from this file and from AGENTS.md. Put project rules in AGENTS.md so every agent sees them. Put Claude Code only notes here. Personal notes can go in `CLAUDE.local.md`, which should stay out of git.
