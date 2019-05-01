class Tree {
  constructor() {
    this.root = null;
  }
  addarbol(val){
    if (this.isEmpty()) {
      this.root = new Node(val)
      return;
    }
    var aux = this.root
    while (aux) {
      if (val < aux.value){
        if (aux.left) {
          aux = aux.left;
        } else {
          aux.left = new Node(val)
          return;
        }
      } else {
        if (aux.right) {
          aux = aux.right
        } else {
          aux.right = new Node(val)
          return;
        }
      }
    }
  }


  Node(){
    this.valor =val;
    this.derecho = null;
    this.izquierdo = null;

  }

  isEmpty() {
     return this.root ===null
  }
}


 for(let i in personas){
  addarbol(personas[i]);
}
