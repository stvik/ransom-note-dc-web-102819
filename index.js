// let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
// "e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
// "h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
// "u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
// "p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
//  "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

//  let note = "give me the ferbie or else"

const buildHistogram = (magazine) => {

	let hist = {}
	magazine.forEach(letter => {
		if (hist[letter]) {
			hist[letter] += 1
		} else {
			hist[letter] = 1
 		}
	})

	return hist
}

const canBuildNote = (magazine,note) => {
	let hist = buildHistogram(magazine)
	let bool = true
	Array.from(note).forEach(letter => {
		if (hist[letter]) {
			hist[letter] -= 1
		} else {
			bool = false
		}
	})
	debugger
	return bool
}


