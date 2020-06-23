                    // Chapters: 21-25



                    // Q:01
                    var first = prompt("Please enter your first name", "firstname")
                    var last = prompt("Please enter your second name", "secondname")
                    var name = first + last
                    alert("Welcome" + name)

                    // Q: 02
                    var favphone = prompt("Please enter your favourite mobile phone", "samsung")
                    document.write("My favurite mobile model is :" + favphone)
                    var n = favphone.length
                    document.write(n)

                    // Q: 03
                    var e = "pakistan"
                    var o = e.indexOf("n")
                    document.write("word is: <br>" + e + "<br> n is at index: " + o)

                    // Q: 04
                    var str = "hello world"
                    var n = str.lastIndexOf("l")
                    document.write("<br> last index of hello world is at :" + n)


                    // Q: 05
                    var str = "pakistan"
                    var res = str.charAt(3)
                    document.write("<br> at index 3 of of pakistan the char is :" + res)

                    // Q: 06
                    var firstname = prompt("Please enter your first name", "firstname")
                    var lastname = prompt("Please enter your second name", "secondname")
                    alert("Welcome" + firstname + lastname)


                    // Q: 07
                    var hyder = "Hyderabad!"
                    var replaceablestr = hyder.replace("Hyder", "Islam")
                    document.write("<br>" + replaceablestr)

                    // Q: 08
                    var message = "Ali and Sami are best friends. They play cricket and football together."
                    var res1 = message.replace("and", "&")
                    document.write("<br>" + res1)

                    // Q: 09
                    var y = "6766"
                    var x = +y
                    document.write("<br>" + typeof y + "<br>" + typeof x)

                    // Q: 10
                    var penautstr = prompt("Please enter", "peanut")
                    var res = penautstr.toUpperCase()
                    document.write("<br>" + res + "<br>")

                    // Q: 11
                    function titleCase(str) {
                        str = str.toLowerCase().split(' ')
                        for (var i = 0; i < str.length; i++) {
                            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
                        }
                        return str.join(' ')
                    }
                    document.write(titleCase("javascript"))

                    // Q: 12
                    var number = 36.36
                    var numberstr = number.toString()
                    document.write("<br>" + typeof number + "<br>" + typeof numberstr)

                    // Q: 13
                    var userName = prompt("Enter your Input: ")
                    checkValidName(userName)

                    function checkValidName(un) {
                        var message
                        var split = []
                        var arr = []
                        for (var i = 0; i < un.length; i++) {
                            split[i] = un.split("&nbsp;")
                            arr[i] = un.charCodeAt(i)
                            if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
                                message = "Correct User Name"
                            }
                            while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
                                alert("please enter a valid userName")
                                userName = prompt("Enter your Input: ")
                                split[i] = un.split("&nbsp")
                                arr[i] = un.charCodeAt(i)
                                if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
                                    message = "correct in"
                                    break
                                }
                            }

                        }
                        alert(message)
                    }

                    // Q: 14
                    var e = ["apple", "mango", "banana", "orange"]
                    var n = str.search(v)
                    var v = prompt("enter seach")
                    document.write(n)

                    // Q: 16
                    var str = "University of Karachi"
                    for (var i = 0; i <= str.length; i++) {
                        document.write(str.charAt(i) + "<br>")

                    }


                    // Q: 17
                    var str = prompt("enter string")
                    var n = str.charAt(str.length - 1)
                    document.write("<br> last index of userinput is at :" + n)




                    //Chapter: 26-30

                    // Q: 01
                    var num = prompt("enter number")
                    document.write("number" + num)
                    var r = Math.round(num)
                    document.write("rouund off:" + Math.round(num) + " <br> Floor:" + Math.floor(num) + " <br> Ceil:" + Math.ceil(num))

                    // Q: 02
                    var num = prompt("enter number")
                    document.write("number" + num)
                    var r = Math.round(num)
                    document.write("rouund off:" + Math.round(num) + " <br> Floor:" + Math.floor(num) + " <br> Ceil:" + Math.ceil(num))

                    // Q: 03
                    var num = prompt("enter number")
                    document.write("number" + num)
                    var absvalue = Math.abs(num)
                    document.write("Absolute value:" + absvalue)

                    // Q: 04
                    var rand = Math.round(Math.random() * 6)
                    document.write("rand:" + rand)

                    // Q: 05
                    var heads = 0
                    var tails = 0

                    function click() {
                        x = (Math.floor(Math.random() * 2) == 0)
                        if (x) {
                            flip("heads")
                        } else {
                            flip("tails")
                        }
                    }

                    function flip(coin) {
                        document.getElementById("result").innerHTML = coin
                    }

                    // Q: 06
                    var rand = Math.round(Math.random() * 100)
                    document.write("rand:" + rand)


                    // Q: 08
                    var secreterand = Math.floor(Math.random() * 10 + 1)
                    var userinput = parseInt(prompt("Enter a Number Between 1 to 10"))
                    if (userinput == secreterand) {
                        alert("Congratulation!")
                    } else {
                        alert("Try Again!")
                    }



                    //Chapter: 31-34

                    // Q: 01
                    var d = new Date()
                    document.write(d)

                    // Q: 02
                    var month = new Array()
                    month[0] = "January"
                    month[1] = "February"
                    month[2] = "March"
                    month[3] = "April"
                    month[4] = "May"
                    month[5] = "June"
                    month[6] = "July"
                    month[7] = "August"
                    month[8] = "September"
                    month[9] = "October"
                    month[10] = "November"
                    month[11] = "December"
                    var d = new Date()
                    var n = month[d.getMonth()]
                    document.write(n)

                    // Q: 03
                    var d = new Date()
                    var weekday = new Array(7)
                    weekday[0] = "Sunday"
                    weekday[1] = "Monday"
                    weekday[2] = "Tuesday"
                    weekday[3] = "Wednesday"
                    weekday[4] = "Thursday"
                    weekday[5] = "Friday"
                    weekday[6] = "Saturday"
                    var s = weekday[d.getDay()]
                    document.write("<br>" + s)

                    // Q: 04
                    var d = new Date()
                    var weekday = new Array(7)
                    weekday[0] = "Sunday"
                    weekday[1] = "Monday"
                    weekday[2] = "Tuesday"
                    weekday[3] = "Wednesday"
                    weekday[4] = "Thursday"
                    weekday[5] = "Friday"
                    weekday[6] = "Saturday"
                    var s = weekday[d.getDay()]
                    if (s == 'Saturday' || s == "Sunday") {
                        document.write("<br>" + s + "Its a fun day!")
                    } else {
                        document.write("it's a working day")
                    }

                    // Q: 05
                    today = new Date()
                    var dd = today.getDate()
                    if (dd >= 15) {
                        document.write("<br>" + s + "Last 15 days")
                    } else {
                        document.write("First 15 days")
                    }
                    ///////////////////////////////////////////////////

                    // Q: 07
                    var j = new Date()
                    var x = j.getHours()

                    if (x <= 12) {
                        document.write("<br> its AM")
                    } else {
                        document.write("its PM")
                    }

                    // Q: 08
                    var today = new Date()
                    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)
                    document.write(lastDayOfMonth)

                    // Q: 09
                    var ramazan_first = new Date("June 15, 2015")
                    var msToday = today.getTime()
                    var ms_of_ramazan_first = ramazan_first.getTime()
                    var msDiff = ms_of_ramazan_first - msToday
                    document.write(msDiff)

                    // Q: 10
                    var d = new Date("January 01, 2020")
                    var u = new Date()
                    var s_for_current = u.getSeconds()
                    var s_for_beginning = d.getSeconds()
                    var difference = s_for_current - s_for_beginning
                    document.write(difference)


                    // Q: 13
                    var age = prompt("enter age")
                    var d = new Date()
                    var year = d.getFullYear()
                    var e = year - age
                    document.write("Your Age: {0}", age)
                    document.write("birthyear:{0} ", e)





                    //Chapter: 35-38

                    // Q: 01
                    function display_date() {
                        var d = new Date(2018, 11, 24, 10, 33, 30, 0)
                        document.write(d)

                    }
                    display_date()

                    // Q: 02
                    function display_name() {
                        var a = prompt("frstname")
                        var b = prompt("lastname")
                        var name = frstname + lastname
                        document.write("welcome!" + name)

                    }
                    display_name()

                    // Q: 03
                    function sum_of_two_no(num1, num2) {
                        result = num1 + num2
                        return result
                    }
                    var num1 = prompt("enter num1")
                    var num2 = prompt("enter num2")
                    document.write(sum_of_two_no(num1, num2))


                    // Q: 04
                    function operation_on_two_no(num1, num2, op) {
                        if (op == '+') {
                            result = num1 + num2
                        } else if (op == '-') {
                            result = num1 - num2
                        } else if (op == '*') {
                            result = num1 * num2
                        } else if (op == '/') {
                            result = num1 / num2
                        }
                        return result
                    }
                    var num1 = prompt("enter num1")
                    var num2 = prompt("enter num2")
                    var op = prompt("Enter Operator")
                    document.write(operation_on_two_no(num1, num2, op))



                    // Q: 05
                    function square_of_no(num) {
                        var e = Math.sqrt(num)
                        document.write(e)
                    }
                    var n = prompt("enter num")
                    square_of_no(n)

                    // Q: 06
                    function factorial(n) {
                        let answer = 1;
                        if (n == 0 || n == 1) {
                            return answer;
                        } else {
                            for (var i = n; i >= 1; i--) {
                                answer = answer * i;
                            }
                            return answer;
                        }
                    }
                    let n = 4;
                    answer = factorial(n)
                    console.log("The factorial of " + n + " is " + answer);

                    // Q: 07
                    function count_no() {
                        var start = parseInt(prompt("Enter Starting Number"))
                        var end = parseInt(prompt("Enter Ending Number"))
                        for (var i = start; i <= end; i++) {
                            document.write(i + " ")
                        }
                    }
                    count_no()


                    // Q: 08
                    function Hypotenous() {
                        var perp = parseInt(prompt("Enter Perpendicualr"))
                        var base = parseInt(prompt("Enter Base"))
                        var hypoteneus = square(perp, base)
                        document.write("Hypoteneus of a Triangle: " + hypoteneus)

                        function square(perp, base) {

                            var hyp = Math.sqrt(perp) + Math.sqrt(base)
                            return hyp

                        }
                    }
                    Hypotenous()


                    // Q: 10
                    function isPalindrome(string) {
                        if (string == string.split('').reverse().join('')) {
                            console.log(string + ' is palindrome.')
                        } else {
                            console.log(string + ' is not palindrome.')
                        }
                    }

                    isPalindrome("madam")
                    isPalindrome("abba")
                    isPalindrome("mom")

                    // Q: 11
                    function titleCase(str) {
                        str = str.toLowerCase().split(' ')
                        for (var i = 0; i < str.length; i++) {
                            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
                        }
                        return str.join(' ')
                    }
                    document.write(titleCase("the quick borwn fox"))


                    // Q: 12
                    function find_longest_word(str) {
                        var array1 = str.match(/\w[a-z]{0,}/gi)
                        var result = array1[0];

                        for (var x = 1; x < array1.length; x++) {
                            if (result.length < array1[x].length) {
                                result = array1[x]
                            }
                        }
                        return result
                    }
                    console.log(find_longest_word('Web Development Tutorial'))

                    // Q: 13
                    function char_count(str, letter) {
                        var letter_Count = 0
                        for (var position = 0; position < str.length; position++) {
                            if (str.charAt(position) == letter) {
                                letter_Count += 1
                            }
                        }
                        return letter_Count
                    }

                    console.log(char_count('hello.com', 'o'))