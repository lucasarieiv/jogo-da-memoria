    // HTML

    const memoryCard = () => {

        const $head = document.querySelector("head");
        const $style = document.createElement("style")
    
        $style.textContent = `
        .memory-card {
            width: 155px;
            height: 155px;
            position: relative;
        }

        .memory-card .card {
            cursor: pointer;
            width: 100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .16);
            position: relative;
            margin-bottom: 15px;
            position: absolute;
        }
        
        .memory-card .card.-front {
            background-color: #fff;
            display: flex;
        }
        
        .memory-card.-active .card {
            display: none;
        }

        .memory-card.-active .card.-front {
            display: flex;
        }
    
        .memory-card .card.-front::before {
            content: '';
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;
        }
    
        .memory-card .icon {
            width: 100px;
            height: 100px;
        }
    
        .memory-card .card.-front > .icon {
            position: absolute;
            transform: translateY(-10px)
        }
        `;

        
        $head.insertBefore($style, null)

        
        return ({src,alt,nameClass}) => `
        <div class="memory-card" onClick="handleClick(this)">
            <article class="card -front">
                <img 
                    src="${src}"
                    alt="${alt}"
                    class="icon"
                    data-image="${src}"
                />
            </article>
            <article class="card">
                <img
                    src="img/icon-collabcode.png"
                    alt="O Mascote da CollabCode, o Gueio"
                    class="icon"
                    data-image="${src}"
                />
            </article>
        <div>`

        ;
    };

    // Functions

    const handleClick = ($component) => {        
        $component.classList.toggle('-active')
    }
