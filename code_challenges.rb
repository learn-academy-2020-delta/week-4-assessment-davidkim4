# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

#Creates a method that takes in 1 array parameter.
def odd_filter array
    #Goes through the array and only returns values that are the Integer type. From the array of Integers, it goes through again and returns only odd Integers. Then sort the array from least to greatest and make it a permanent change to the array parameter.
    array.select{|value| value.is_a?(Integer)}.select(&:odd?).sort!
end
p odd_filter fullArr1
p odd_filter fullArr2



# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.

#Create a class called Bike
class Bike 
    #Initialize with a model and frame as a parameter. Initializes wheels, bell, and speedometer with default values that will not change. 
    def initialize (model, frame)
        @model = model
        @frame = frame
        @wheels = 2
        @bell = "Beep beep!"
        @speedometer = 0
    end

    #Method that returns a string with whatever parameter we pass in after creating a new instance of the class Bike.
    def get_info
        "The #{@model} bike has #{@wheels} wheels and a #{@frame} frame."
    end

    #Getter for bell value.
    def ring_bell 
        @bell
    end

    #Getter for speedometer value and returns it as a string.
    def speed
        "#{@speedometer}"
    end

    #Method for increasing the speedometer value, takes in 1 number parameter.
    def pedal_faster number
        #Sets the speedometer to itself after adding number.
        @speedometer += number
    end


    #Method for increasing the speedometer value, takes in 1 number parameter.
    def brake number
        #Sets the speedometer to itself after subtracting number.
        @speedometer -= number
        #Checks to see if speedometer is less than 0.
        if @speedometer < 0
            #If speedometer is less than 0, sets speedometer to 0
            @speedometer = 0
        else 
            #If condition is not true, sets speedometer to itself without any changes.
            @speedometer
        end
    end
end

#Create a new class instance of Bike called my_bike.
my_bike = Bike.new("Trek", "168cm")

#Return my_bike after calling on get_info method.
puts my_bike.get_info
# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.

#Return my_bike after calling on ring_bell method.
puts my_bike.ring_bell
# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.

#Return my_bike after calling on speed method.
puts my_bike.speed
# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

#Return my_bike after calling on pedal_faster method with the parameter 10.
puts my_bike.pedal_faster 10
# Expected output example: my_bike.pedal_faster 10 => 10

# Return my_bike after calling on brake method with the parameter 15.
puts my_bike.brake 15
# Expected output example: my_bike.brake 15 => 0
