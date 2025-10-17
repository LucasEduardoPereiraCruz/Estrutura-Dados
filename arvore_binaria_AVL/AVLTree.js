class AVLNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;  //Todo nó começa com altura 1
    }
}

class AVLTree {
    constructor(){
        this.root = null;
    }

    getHeight(node){
        return node ? node.height : 0;
    }

    getBalanceFactor(node){
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }

    rotateRight(y){
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x){
        const y = x.right;
        const T2 = y.left;

        y.left = y;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    insert(value){
        this.root = this._insert(this.root, value);
    }
}