
var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Order Management","Refund","Return And Replace","Contact Us"]
    },
    order: {
        title:["Please select category"],
        options:['Update Order','Cancle Order'],
        url : {
            
        }
    },
    update: {
        title: ["Thanks for your response"],
        options: ["Alter Quantity","Change Address and Contact","Get Delivery Agent Number","Delivery Address Update"],
        url: {
            // more:"https://www.youtube.com/@webhub/videos",
            // link:["#","#","#","#","#"]
        }
    },
    alter:{
        title:["thanks for response","Increase Quantity","Decrease Quantity","whatever you want alter quantity give details on Whats app"],
        options:["what's app"],
        url:{
            more:" https://wa.me/919156584734",
            link: ["https://wa.me/919156584734", "#"]
        }

    },
    change:{
        title:["thanks for response"," Provide correct Address and Contact Number","On Whats app"],
        options:["what's app"],
        url:{
            more:" https://wa.me/919156584734",
            link: ["https://wa.me/919156584734", "#"]
        }
    },
    get:{
        title:["thanks for response"," Provide your Order details","On Whats app","get delivery agent number"],
        options:["what's app"],
        url:{
            more:" https://wa.me/919156584734",
            link: ["https://wa.me/919156584734", "#"]
    }
},
    delivery:{
        title:["thanks for response"," Provide your Order number"," And New delivery address","On Whats app"],
        options:["what's app"],
        url:{
            more:" https://wa.me/919156584734",
            link: ["https://wa.me/919156584734", "#"]
    }
    },
    cancle: {
        title: ["Thanks for your response","Provide Order Number on whatsapp and Reason for Cancellation"],
        options: ["send with whatsapp"],
        url: {
            more:" https://wa.me/919156584734",
            link: ["https://wa.me/919156584734", "#"]
    }
    },
    refund: {
        title:["Thank you for your response"],
        options:["inquire about refunds?"],
        url : {
           
        }
    },
    inquire:{
        title:["To initiate a refund","click on Whats'app option","And provide your order number"],
        options:["Whats app"],
        url:{
            more:" https://wa.me/919156584734",
            link: ["https://wa.me/919156584734", "#"]
        }
    },
 return: {
        title:["Thanks for your response","Please select one of the below options to proceed further"],
        options:['Cancle order','Replace Order','Reschedule Pickup'],
        url : {
            
        }
    },
    cancle: {
        title:["Thanks for your response","Provide order number on whats'app","For cancle your order"],
        options:['Whats app'],
        url : {
            more:" https://wa.me/919156584734",
            link:[ "https://wa.me/919156584734", "#"]
        }
    },
    replace: {
        title:["Thanks for your response","give me your order number and reason for replacement","send your order details on whatsapp","click on whatsapp chat"],
        options:['whatsapp chat'],
        url : {
            more:" https://wa.me/919156584734",
            link:[ "https://wa.me/919156584734", "#"]
        }
    },
    reschedule: {
        title:["Thanks for your response","Reason for reschedule your order and order details","send on whatsapp"],
        options:['whatsapp'],
        url : {
            more:"https://wa.me/919156584734",
            link:["https://wa.me/919156584734", "#"]
        }
    },
    // men: {
    //     title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
    //     options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
    //     url : {
    //         more:"https://www.youtube.com/@webhub/videos",
    //         link:["#","#","#","#","#"]
    //     }
    // },
    // women: {
    //     title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
    //     options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
    //     url : {
    //         more:"https://www.youtube.com/@webhub/videos",
    //         link:["#","#","#","#"]
    //     }
    // },
    contact: {
        title:["These are some helpline option"],
        options: ["Contact to helpline numeber","Contact to Whatsapp"],
        url : {
    
            more:" https://wa.me/919156584734",
            link: ["tel:+919156584734", "https://wa.me/919156584734", "#"]
    }
    },

    // update: {
    //     title: ["Thanks for your response","Here are some genre based movies"],
    //     options: ["Alter Quantity","Change Address and Contact","Get Delivery Agent Number","Change Delivery"],
    //     url: {
    //         // more:"https://www.youtube.com/@webhub/videos",
    //         // link:["#","#","#","#","#"]
    //     }
    // },
    // alter:{
    //     title:["thanks for response"]
    // }
    
    // cancle: {
    //     title: ["Thanks for your response","Provide Order Number on whatsapp and Reason for Cancellation"],
    //     options: ["send with whatsapp"],
    //     url: {
    //         more:" https://wa.me/919156584734",
    //         link: ["https://wa.me/919156584734", "#"]
    // }
    // },
//     web: {
//         title: ["Thanks for your response","Here are some genre based web series"],
//         options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
//         url: {
//             more:"https://www.youtube.com/@webhub/videos",
//             link:["#","#","#","#","#"]
//         }
//     },
//     others: {
//         title: ["Here are some more options for you"],
//         options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
//         url: {
//             more:"https://www.youtube.com/",
//             link:["#","#","#","#","#"]
//         }
//     },
}



document.addEventListener("DOMContentLoaded", function() {
    showChatBot(); // Call the function to start the chatbot when the page loads
});

var cbot = document.getElementById("chat-box");
var len1 = data.chatinit.title.length;

function showChatBot() {
    document.getElementById('test').style.display = 'block';
    initChat();
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function() {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 500))
}

var j = 0;

function handleChat() {
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];

    document.querySelectorAll(".opt").forEach(el => {
        // el.remove();
    })
    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
}

function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        setTimeout(function() {
            handleDelay(title[i]);
        }, i * 500)
    }

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    if (isObjectEmpty(url) == true) {
        setTimeout(function() {
            showOptions(options);
        }, title.length * 500)
    } else {
        setTimeout(function() {
            handleOptions(options, url);
        }, title.length * 500)
    }
}

function handleOptions(options, url) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<a class="m-link" href="' + url.link[i] + '">' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="' + url.more + '">' + 'See more</a>';

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll() {
    var elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}





























// var data = {
//     chatinit: {
//         title: ["Hello", "I am chatbot", "How can I help you?"],
//         Option: ["Yes", "No"]
//     },
//     help: {
//         title: ["Please select a category"],
//         Option: ['About Login', 'Order Related']
//     }
// };

// function showChatBot() {
//     var chatContainer = document.getElementById('chatcontainer');
    

//     var chatInitMessages = data.chatinit.title;
//     chatInitMessages.forEach(function(message) {
//         var p = document.createElement('p');
//         p.textContent = message;
//         chatContainer.appendChild(p);
//     });

//     var options = data.chatinit.Option; // Change 'Option' to 'Options'
//     options.forEach(function(option) {
//         var button = document.createElement('button');
//         button.textContent = option;
//         button.addEventListener('click', function() {
//             showOptions('help');
//         });
//         chatContainer.appendChild(button);
//     });

//     chatContainer.scrollTop = chatContainer.scrollHeight;
// }

// function showOptions(category) {
//     var chatContainer = document.getElementById('chatcontainer');
   

//     if (category === 'help') {
//         var options = data[category].Option;
//         options.forEach(function(option) {
//             var radio = document.createElement('input');
//             radio.type = 'radio';
//             radio.name = 'help-options'; // Give them unique names
//             var label = document.createElement('label');
//             label.textContent = option;
//             label.appendChild(document.createElement('br'));
//             chatContainer.appendChild(radio);
//             chatContainer.appendChild(label);
//         });
//     }

//     chatContainer.scrollTop = chatContainer.scrollHeight;
// }

// function sendMessageToChatbot(message) {
//     var chatContainer = document.getElementById('chatcontainer');
//     var messageElement = document.createElement('div');
//     messageElement.innerHTML = "<span>User: </span>" + "<span>" + message + "</span>";
//     chatContainer.appendChild(messageElement);
// }

// document.addEventListener("DOMContentLoaded", function() {
//     showChatBot();
   
//     var helpRadio = document.getElementById('Yes');


//     yesRadio.addEventListener('change', function() {
//         if (this.checked) {
//             helpOptions.style.display = 'block';
//         } else {
//             helpOptions.style.display = 'none';
//         }
//     });
//     var aboutLoginRadio = document.getElementById('about-login');
//     var orderRelatedRadio = document.getElementById('order-related');
//     // var helpOptions = document.getElementById('help-options');

//     helpRadio.addEventListener('change', function() {
//         if (this.checked) {
//             // helpOptions.style.display = 'block';
//             showOptions('help' );// Show options when 'help' radio button is checked
//         // } else {
//         //     helpOptions.style.display = 'none';
//         }
//     });


//     var noRadio = document.getElementById('No');
//     noRadio.addEventListener('change', function() {
//         if (this.checked) {
//             var chatContainer = document.getElementById('chatcontainer');
//             chatContainer.innerHTML = ''; // Clear existing content
//         }
//     });

   

//     aboutLoginRadio.addEventListener('change', function() {
//         if (this.checked) {
//             alert('About Login option selected');
//             // Add logic for About Login option here
//         }
//     });

//     orderRelatedRadio.addEventListener('change', function() {
//         if (this.checked) {
//             alert('Order Related option selected');
//             // Add logic for Order Related option here
//         }
//     });
// });








// // var data = {
// //     chatinit: {
// //         title: ["Hello", "I am chatbot", "How can I help you?"],
// //         Option: ["Help"]

// //     },
// //     help: {
// //         title: ["Please select a category"],
// //         Option: ['About Login', 'Order Related']
// //     }
// // }

// // function showChatBot() {
// //     var chatContainer = document.getElementById('chatcontainer');
// //     chatContainer.innerHTML = '';

// //     var chatInitMessages = data.chatinit.title;
// //     chatInitMessages.forEach(function(message) {
// //         var p = document.createElement('p');
// //         p.textContent = message;
// //         chatContainer.appendChild(p);
// //     });
    
// //     var options = data.chatinit.Option;
// //     options.forEach(function(option) {
// //         var button = document.createElement('button');
// //         button.textContent = option;
// //         button.addEventListener('click', function() {
// //             showOptions('help');
// //         });
// //         chatContainer.appendChild(button);
// //     });

// //     chatContainer.scrollTop = chatContainer.scrollHeight;
// // }

// // function showOptions(category) {
// //     var chatContainer = document.getElementById('chatcontainer');
// //     // chatContainer.innerHTML = '';

// //     var options = data[category].Option;
// //     options.forEach(function(option) {
// //         var p = document.createElement('p');
// //         p.textContent = option;
// //         chatContainer.appendChild(p);
// //     });

// //     chatContainer.scrollTop = chatContainer.scrollHeight;

    
// //     sendMessageToChatbot(category);
// // }

// // function sendMessageToChatbot(message) {
// //     var chatContainer = document.getElementById('chatcontainer');
// //     var messageElement = document.createElement('div');
// //     messageElement.innerHTML = "<span>User: </span>" + "<span>" + message + "</span>";
// // }

// // document.addEventListener("DOMContentLoaded", function() {
// //     var helpButton = document.getElementById('chat-button');
// //     var chatOptions = document.getElementById('chat-options');

// //     helpButton.addEventListener('click', function() {
// //         chatOptions.style.display = 'block';
// //     });

// //     var aboutLoginButton = document.getElementById('about-login');
// //     var orderRelatedButton = document.getElementById('order-related');

// //     aboutLoginButton.addEventListener('click', function() {
// //         sendMessageToChatbot('About Login option clicked');
// //     });

// //     orderRelatedButton.addEventListener('click', function() {
// //         sendMessageToChatbot('Order Related option clicked');
// //     });
// // });

// // showChatBot();
