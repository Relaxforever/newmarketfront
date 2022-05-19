// Visualization format for numbers
export const numFormat = (number) => {

   if (number) {

      let stringFormat = ""
      let strNumber = number + ""

      strNumber = strNumber.split("").reverse().join("")

      for (let i = 0; i <= strNumber.length - 1; i++) {
         if (i % 3 !== 0 || i === 0) {
            stringFormat += strNumber[i]
         } else {
            stringFormat += "."
            stringFormat += strNumber[i]
         }
      }
      return stringFormat.split("").reverse().join("")
   }
}