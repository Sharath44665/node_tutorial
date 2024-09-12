# Async vs Sync

## In Sync:

output:

```
start
this is first text file
this is second text file
finish
next start
```
in this approach, when a user logs in he/she must finish the work then only another user can log in

## In Async:

output:

```
start  
starting next task
finish
```

in this approach, when user logs in, **simultaneously another user can log in**.

### take away:
- sync takes longer time , async takes lesser time
- sync is quite easier to work with, async - as usual multiple callbacks makes quite complex 

