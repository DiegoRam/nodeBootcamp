module.exports = {
	"MyModel": {
        "id": "MyModel",
        "required": ["id", "description"],
        "properties": {
            "id": {
                "type": "integer",
                "format": "int64",
                "description": "Unique identifier"
            },
            "description": {
                "type" : "string",
                "description" : "Description about myModel capabilities"
            }
        }
    }
}