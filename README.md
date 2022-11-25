# Scenario -  JSON Transformation

Create an application that will do below

## Code Generator
+ Accept a source JSON structure
+ Accept a target JSON structure
+ Accept a mapping (provided in a CSV format)
+ Build an app that will generate the code required to transform the source JSON structure to target JSON structure based on the mapping[***Key Feature***]
+ The generated code should preferably be Python or NodeJS.
+ If you are using any transformation libraries like JQ/JSONATA/JOLT to achieve the mapping and transformation, the application should auto generate the spec files needed for these libraries [***Key Feature***]
+ Application should be generic enough to accept different source/target/mapping inputs and dynamically arrive at the required code to do the conversion.

## Code Executor 

+ Maintain a list of mapping-specification or generated-code specification by name. 
+ Expose an REST API endpoint which will accept source_json and specification name as input. 
+ REST API should accept the source_json, apply the transformation dynamically based on the generated code and respond back with transformed json. 
+ Based on the inputs received, automatically pick up the generated code and execute the same. 
+ Output should be the intended transformed JSON. 
+ Even if the generated code is executed with different data of same JSON structure, the intended output should be achieved.


## Other Guidelines

### Input Data
+ Refer to the below path in repo for sample data
       
       - data
        |- sample_1
        |- sample_2
        |- sample_3
        
### Recommended Folder Structure
        - app_ui (for the UI files)
        - app (for the backend files)
        - presentation (to place working demo videos and presentation explaining the architecture of the app)

### Steps to submit the code
+ Fork the repo to your team's git repo.
+ Create a branch with your team name.
+ You can make the changes to your branch locally.
+ Create a file called TestMe.md and mention  how to start the app and if any dependencies have to be downloaded to run the app locally
+ Do not push the branch to the STG repo till instructed.
+ At the end of the event, you can push your branch into the STG repo.

***Try not to use firebase or any internet provided services for creating or running the apps***
