const postEntry = (newLegoObject) => {
        return fetch("http://localhost:8088/lego", {
            method: "POST",
            body: JSON.stringify(newLegoObject),
            headers: {
                
                "Content-Type": "application/json"
            },
            
        })

    }
