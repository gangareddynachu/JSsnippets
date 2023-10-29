/*****

The Factory Design Pattern is one of the creational desing patterns in java.
It is used to create objects without specifying the exact class of the object that will be created.

Instead the Factory Design Pattern defines an interface for creating objects and lets subclasses alter the type of objects that will be created.


***/
// Product interface
interface Product {
    void create();
}

// Concrete product classes
class ConcreteProduct1 implements Product {
    @Override
    public void create() {
        System.out.println("Product 1 created");
    }
}

class ConcreteProduct2 implements Product {
    @Override
    public void create() {
        System.out.println("Product 2 created");
    }
}

// Factory interface
interface ProductFactory {
    Product createProduct();
}

// Concrete factory classes
class ConcreteProductFactory1 implements ProductFactory {
    @Override
    public Product createProduct() {
        return new ConcreteProduct1();
    }
}

class ConcreteProductFactory2 implements ProductFactory {
    @Override
    public Product createProduct() {
        return new ConcreteProduct2();
    }
}

// Client code
public class Main {
    public static void main(String[] args) {
        ProductFactory factory1 = new ConcreteProductFactory1();
        Product product1 = factory1.createProduct();
        product1.create(); // Output: Product 1 created

        ProductFactory factory2 = new ConcreteProductFactory2();
        Product product2 = factory2.createProduct();
        product2.create(); // Output: Product 2 created
    }
}



Example2:

interface  Shape {
    void draw();
}

class Circle implements Shape{
    @Override
    public void draw(){
        System.out.println("Circle drawn");
    }
}

class Rectangle implements Shape{
    @Override
    public void draw(){
        System.out.println("Rectangle drawn");
    }
}

class Square implements Shape{
    @Override
    public void draw(){
        System.out.println("Square drawn");
    }
}

class ShapeFactory {
    public Shape createShape(String shapeType){
         if (shapeType.equalsIgnoreCase("Circle")) {
            return new Circle();
        } else if (shapeType.equalsIgnoreCase("Square")) {
            return new Square();
        } else if (shapeType.equalsIgnoreCase("Rectangle")) {
            return new Rectangle();
        } else {
            return null; // Return null for unknown shape types
        }
       
        
    }
}
//client code
class HelloWorld {
    public static void main(String[] args) {
        ShapeFactory factory = new ShapeFactory();

        // Create different shapes using the factory
        Shape circle = factory.createShape("Circle");
        circle.draw(); // Output: Circle drawn

        Shape square = factory.createShape("Square");
        square.draw(); // Output: Square drawn

        Shape rectangle = factory.createShape("Rectangle");
        rectangle.draw(); // Output: Rectangle drawn
        System.out.println("The Factory Design Pattern");

    }
}

/***
  The client code uses the SHapeFactory to create different shapes without knowing the specific implementation details of each shape class
  This demonstrates implementation details of each shape class. This demonstrates the simplicity and flexiblity of the Factory Design Pattern allowing 
  for easy creation of objects without exposing the instantiation logic to the client.



  Factory Design Pattern Advantages


  1) It provides approach to code for interface rather than implementation
  2)It removes the instantiation of actual implementation classes from client code. Factory pattern makes our code robust,less coupled and eay to extend
  3) It provides the abstraction between the implementation and client classes through inheritance

  Factory Design Pattern Examples in JDK
  1) java.util.Calendar, ResourceBundle and NumberFormat getInstance() methods uses Factory pattern.
  2) valueOf() method in wrapper classes like Boolean,Integer ec

  */
