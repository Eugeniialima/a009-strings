const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.trim())
console.log(`A quantidade de caracteres antes da remoção dos espaços era ${minhaString.length}.`)
console.log(`A quantidade de caracteres depois da remoção dos espaços é ${minhaString.trim().length}.`)
console.log(minhaString.replace("________", "sticioso"))
