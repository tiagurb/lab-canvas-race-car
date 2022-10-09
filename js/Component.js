class Component {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
    }

    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    newPosition() {
        this.x += this.speedX;
        this.y += this.speedY;
    }


    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }

    collisionWith(component) {
        return !(this.bottom() < component.top() ||
        this.top() > component.bottom() ||
        this.right() < component.left() ||
        this.left() > component.right())
    }

}