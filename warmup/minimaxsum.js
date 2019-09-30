function miniMaxSum(arr) {
    var selisih = []
    var total = 0 
    var temp = [] 
    var result = ''
    

    for (var i = 0; i < arr.length; i++) {//cari total keseluruhan
        total += arr[i]
    }
    for (var j = 0; j < arr.length; j++) {//kurangi dengan isi masing2 elemen
        selisih.push(total-arr[j])
    }
    for (var k = 0; k < selisih.length; k++){//sortir ascending
        for (var l = k+1; l < selisih.length; l++) {
            if (selisih[k] > selisih[l]) {
                temp = selisih[k]
                selisih[k] = selisih[l]
                selisih[l] = temp
            }
        }
    }

    result += [selisih[0]]
    result += ' '
    result += selisih[selisih.length-1]//output selisih terkecil dan selisih terbesar
    return result
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))//10 14