fetch("http://ec2-13-233-91-89.ap-south-1.compute.amazonaws.com:8080/search").then(
                res =>{ 
                    res.json().then(
                        data => {
                            console.log(data);
                            if(data.length > 0){
                                var temp = "";

                                data.forEach((u)=>{
                                    temp +="<tr>";
                                    temp += "<td>"+u.accessUrl+"</td>";
                                    temp += "<td>"+u.accountType+"</td>";
                                    temp += "<td>"+u.businessModel+"</td>";
                                    temp += "<td>"+u.businessName+"</td>";
                                    temp += "<td>"+u.code+"</td>";
                                    temp += "<td>"+u.created+"</td>";
                                    temp += "<td>"+u.goLiveDate+"</td>";
                                    temp += "<td>"+u.id+"</td>";
                                    temp += "<td>"+u.industry+"</td>";
                                    temp += "<td>"+u.name+"</td>";
                                    temp += "<td>"+u.source+"</td>";
                                    temp += "<td>"+u.statusCode+"</td>";
                                    temp += "<td>"+u.updated+"</td></tr>";
                                })

                                document.getElementById("data").innerHTML = temp;
                            }
                        }
                    )
                }
        )
