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

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    insert(value){
        this.root = this._insert(this.root, value);
    }

    search(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;
        if (value < node.value) return this.search(value, node.left);
        return this.search(value, node.right);
    }

    _insert(node, value){
        if(!node) return new AVLNode(value);

        if(value < node.value){
            node.left = this._insert(node.left, value);
        } else if (value > node.value){
            node.right = this._insert(node.right, value);
        } else {
            return node;
        }

        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        if(balance > 1 && value < node.left.value){
            return this.rotateRight(node);
        }

        if(balance < -1 && value > node.right.value){
            return this.rotateLeft(node);
        }

        if(balance > 1 && value > node.left.value){
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        if(balance < -1 && value < node.right.value){
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

module.exports = AVLTree;