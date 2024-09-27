
const laptop = new Electronics('Laptop', 999.99, 10, 'Dell', 'XPS 13');
const tShirt = new Clothing('T-Shirt', 19.99, 50, 'L', 'Cotton');
const novel = new Books('The Great Gatsby', 14.99, 20, 'F. Scott Fitzgerald', 'Classic');


laptop.displayDetails(); 
tShirt.displayDetails(); 
novel.displayDetails();   


laptop.updateQuantity(-2); 
tShirt.updateQuantity(10); 


laptop.powerOn(); 
laptop.powerOff(); 


tShirt.getFabricType(); 


novel.getAuthor(); 
