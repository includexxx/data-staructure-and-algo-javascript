function Node(data){
    this.data = data
    this.next = null
}

function LinkedList(){
    this.head = null
    this.cur = null
    this.insert = function(data){
        console.log(this)
    }
}

let ls = new LinkedList()
ls.insert()