export function rendezesNevSzerint(lista, kulcs, irany){
    console.log(lista)
    //Ezzel az eredeti megváltozik

    lista.sort(function (a, b){
        console.log(a.nev)
        console.log(b.nev)

        console.log("kovetkező a, b")
        let ertek = 1
        if (a[kulcs]< b[kulcs]){
            ertek = -1
        }
        ertek *= irany
    }
    )
}