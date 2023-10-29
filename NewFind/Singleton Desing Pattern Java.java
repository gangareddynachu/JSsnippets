Singleton Pattern Principles
  
Singleton pattern restricst the instantaiation of a class and ensures that only one instance of the class exists in the JVM.
The Singleton class must provide a global access point to get the instance of the class.
It is used in core java classes( java.lang.Runtime and java.awt.Desktop)


  Implementation:
Private constructor to restrict the instantatiation of a class from other classes.
Private static varaible of the same class that is the only instance of the class.
Public static method that returns the instance of the class that is the global access point for outer world to get the instance of the singleton class.
  
Eager initialization

public class Singleton {
  //Private static instance of the class
  private static Singleton instance;

  //Private constructor prevents instantiation from other classes
  private Singleton(){}

  //Public method to provide access to singleton instance
  public static Singleton getInstance(){
    if(instance ==null){
      instance = new Singleton();
    }
    return instance;
  }
}

In multithreaded environment this basic implementation can cause isses if multiple threads try to access getInstance() method simultaneously
To handle this,you can use synchronization techniques or you can use Bill Pugh Singleton Design or Double-Checking Locking to make thread-safe

  public class Singleton {
    // Private static volatile instance of the class
    private static volatile Singleton instance;

    // Private constructor prevents instantiation from other classes
    private Singleton() {}

    // Public method to provide access to the Singleton instance
    public static Singleton getInstance() {
        if (instance == null) {
            synchorinzed (Singleton.class){
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

The volatile keyword ensures that the multiple threads handle the instance variable correctly
The synchronised block inside the getInstance() method provides further thread safety by preventing multiple threads from entering the 
block simultaneously. The double checking within the synchronized block ensures that only one isntance is created even in the multithreaded environment.


 // Second Approach

  public class Singleton {
    // Private constructor prevents instantiation from other classes
    private Singleton() {}

    // Static inner helper class responsible for lazy initialization of Singleton instance
    private static class SingletonHelper {
        // Static, final instance of the Singleton class
        private static final Singleton INSTANCE = new Singleton();
    }

    // Public method to provide access to the Singleton instance
    public static Singleton getInstance() {
        return SingletonHelper.INSTANCE;
    }
}

This approach leverages the Java class loader mechanism to ensure that the Singleton instance is created in a thread-safe manner and is only
initialised when it is accesssed, making it efficient and safe for multithreaded environments.


  
