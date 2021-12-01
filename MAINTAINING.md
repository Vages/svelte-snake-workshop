# Maintaining

Instructions for maintainers and contributors.

## Merging all changes from main branch to task branches

```bash
git checkout task-5.3-end && git merge main --no-edit && \
git checkout task-5.3-begin && git merge task-5.3-end --no-edit && \
git checkout task-5.2-end && git merge task-5.3-begin --no-edit && \
git checkout task-5.2-begin && git merge task-5.2-end --no-edit && \
git checkout task-5.1-end && git merge task-5.2-begin --no-edit && \
git checkout task-5.1-begin && git merge task-5.1-end --no-edit && \
git checkout task-4.4-end && git merge task-5.1-begin --no-edit && \
git checkout task-4.4-begin && git merge task-4.4-end --no-edit && \
git checkout task-4.3-end && git merge task-4.4-begin --no-edit && \
git checkout task-4.3-begin && git merge task-4.3-end --no-edit && \
git checkout task-4.2-end && git merge task-4.3-begin --no-edit && \
git checkout task-4.2-begin && git merge task-4.2-end --no-edit && \
git checkout task-4.1-end && git merge task-4.2-begin --no-edit && \
git checkout task-4.1-begin && git merge task-4.1-end --no-edit && \
git checkout task-3.6-end && git merge task-4.1-begin --no-edit && \
git checkout task-3.6-begin && git merge task-3.6-end --no-edit && \
git checkout task-3.5-end && git merge task-3.6-begin --no-edit && \
git checkout task-3.5-begin && git merge task-3.5-end --no-edit && \
git checkout task-3.4-end && git merge task-3.5-begin --no-edit && \
git checkout task-3.4-begin && git merge task-3.4-end --no-edit && \
git checkout task-3.3-end && git merge task-3.4-begin --no-edit && \
git checkout task-3.3-begin && git merge task-3.3-end --no-edit && \
git checkout task-3.2-end && git merge task-3.3-begin --no-edit && \
git checkout task-3.2-begin && git merge task-3.2-end --no-edit && \
git checkout task-3.1-end && git merge task-3.2-begin --no-edit && \
git checkout task-3.1-begin && git merge task-3.1-end --no-edit && \
git checkout task-2.2-end && git merge task-3.1-begin --no-edit && \
git checkout task-2.2-begin && git merge task-2.2-end --no-edit && \
git checkout task-2.1-end && git merge task-2.2-begin --no-edit && \
git checkout task-2.1-begin && git merge task-2.1-end --no-edit && \
git checkout task-1.3-end && git merge task-2.1-begin --no-edit && \
git checkout task-1.3-begin && git merge task-1.3-end --no-edit && \
git checkout task-1.2-end && git merge task-1.3-begin --no-edit && \
git checkout task-1.2-begin && git merge task-1.2-end --no-edit && \
git checkout task-1.1-end && git merge task-1.2-begin --no-edit && \
git checkout task-1.1-begin && git merge task-1.1-end --no-edit
```

## Updating the Markdown files

### Step 1: Edit the English base files

The English version of any document is the authoritative version. You will find the English files in the root directory.

### Step 2: Regenerate the translation files

### Prerequisites

You need to install [mdpo](https://mdpo.readthedocs.io/en/master/install.html).

### Updating the text translations

Run the script `npm run generate-translations`. This will regenerate the translation files found in the `locale` directory.

Each translated file consists of a Gnutext (`something.md.po`) file and a Markdown file (`something.md`). The `.po` file is the source of truth for the translation. Translate the new entries in the `.po` file (they appear at the bottom, along with now unused translations which may contain fragments that you can put to use). Once you are done, regenerate the `.md` file by re-running `npm run generate-translations`.

If you are interested in translating the workshop to a new language, post an issue to the Github repo.

## Language and translation choices

### English

- Every part should start with “When you have finished this part”
- Every task should contain the phrase “Your task is”, followed by a description of what change the task introduces. You can expand upon the task description as much as you like.
- Use active voice (e.g. “John describes the button as red”) as much as possible, but use passive voice (e.g. “The button is described as red”) if necessary.
- Assume that the reader has basic knowledge of Javascript and HTML, but not much more. Treat them with respect nonetheless.
- Oxford comma: ❌

### Norsk bokmål

- Translate programming terms when they refer to the general concept instead of a given keyword or lexical element. For example, translate promise as “løfte”, but let the “await” part of “await block” remain in the translation to “await-block” because “await” refers to the lexical element await. And if referring to the Promise class, Promise should remain untranslated.
- Translating “you” from English: When referring to people in general, use the pronoun “man”. When referring to the individual taking the workshop in the workshop situation, use “du”.
- Do not translate the game title “Snake” or the term “game over”. Because the workshop creator thinks they are both awesome.

#### Terminology

| English            | norsk bokmål  |
| ------------------ | ------------- |
| boolean            | boolsk        |
| cardinal direction | himmelretning |
| high score list    | toppliste     |
| instructor         | kursholder    |
| part               | del           |
| promise            | løfte         |
| score              | poengsum      |
| server             | tjener        |
| statement          | utsagn        |
| task               | oppgave       |
| tutorial           | opplæring     |
| workshop           | kurs          |
