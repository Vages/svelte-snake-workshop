# Maintaining

This document is for the people who maintain this workshop. If you're taking the workshop, it's not very relevant, but feel free to look.

## Merging all changes

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
