function navbar()
{
    return `<div id="finalHeader">

    <div id="header1Data">
      <div id="messageDiv">
        <!-- <p id="ptagS">
            <marquee  scrollamount ="1" behavior="scroll" direction="up">Nykaa Man Ultimate Christmas Bash Sale:Upto 50% OFF</marquee>
        </p> -->
      </div>

      <div id="rightmessageDiv">
        
        <div id="button1Flex">
            <i class="fas fa-gift fa-1x"></i>
            <p style="color: white;margin-top: 5px;padding-left: 5px;font-size: 15px;">Gift Card</p>
        </div>

        <div id="button2Flex">
            <i class="fas fa-question-circle"></i>
            <p style="color: white;margin-top: 5px;padding-left: 5px;font-size: 15px;">Help</p>
        </div>

    </div>
    </div>
     <!---second header part-->

    <div id="header2Container">
        <div id="setHeader2">
            <div id="imgSetter">
                <img src="https://www.indiantelevision.com/sites/default/files/images/tv-images/2020/10/05/ny.jpg" alt="">
            </div>
            <div id="titleSetup">
                <span>CATEGORIES</span>
                <span>BRANDS</span>
                <span>GROOMING ADVICE</span>
            </div>
            <!-- <div id="inputSetup">
                <span><i class="fas fa-search"></i></span>
                <input type="text"  placeholder="Search on Men">
                
            </div> -->
            <div class="search">
                <input id="inp" onclick="clickedInput()" placeholder="&#xf002 Search on Men" >
              </div>

            <div id="accountSetup">
                <img id="GoToLogin" class="imgIcon" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMDAwMDAiPjxwYXRoIGQ9Ik04NiwxNC4zMzMzM2MtMTkuNzI2NTUsMCAtMzUuODMzMzMsMTYuMTA2OCAtMzUuODMzMzMsMzUuODMzMzNjMCwxOS43MjY1MyAxNi4xMDY3OSwzNS44MzMzMyAzNS44MzMzMywzNS44MzMzM2MxOS43MjY1NSwwIDM1LjgzMzMzLC0xNi4xMDY4IDM1LjgzMzMzLC0zNS44MzMzM2MwLC0xOS43MjY1MyAtMTYuMTA2NzksLTM1LjgzMzMzIC0zNS44MzMzMywtMzUuODMzMzN6TTg2LDI1LjA4MzMzYzEzLjkxNjgyLDAgMjUuMDgzMzMsMTEuMTY2NTIgMjUuMDgzMzMsMjUuMDgzMzNjMCwxMy45MTY4MSAtMTEuMTY2NTEsMjUuMDgzMzMgLTI1LjA4MzMzLDI1LjA4MzMzYy0xMy45MTY4MiwwIC0yNS4wODMzMywtMTEuMTY2NTIgLTI1LjA4MzMzLC0yNS4wODMzM2MwLC0xMy45MTY4MSAxMS4xNjY1MSwtMjUuMDgzMzMgMjUuMDgzMzMsLTI1LjA4MzMzek00NC43OTE2NywxMDAuMzMzMzNjLTguODQxODgsMCAtMTYuMTI1LDcuMjgzMTIgLTE2LjEyNSwxNi4xMjV2NC4yOTcyYzAsMTAuNTM4MDkgNi42ODE4OSwxOS45OTA1NCAxNi44NzM4NiwyNi40OTAwN2MxMC4xOTE5Nyw2LjQ5OTUzIDI0LjEzNjgyLDEwLjQyMTA2IDQwLjQ1OTQ3LDEwLjQyMTA2YzE2LjMyMjY1LDAgMzAuMjY3NSwtMy45MjE1MyA0MC40NTk0NywtMTAuNDIxMDZjMTAuMTkxOTcsLTYuNDk5NTMgMTYuODczODYsLTE1Ljk1MTk4IDE2Ljg3Mzg2LC0yNi40OTAwN3YtNC4yOTcyYzAsLTguODQxODggLTcuMjgzMTIsLTE2LjEyNSAtMTYuMTI1LC0xNi4xMjV6TTQ0Ljc5MTY3LDExMS4wODMzM2g4Mi40MTY2N2MzLjAzMzI5LDAgNS4zNzUsMi4zNDE3MSA1LjM3NSw1LjM3NXY0LjI5NzJjMCw1Ljk2Njc0IC0zLjg0MzI2LDEyLjI4NTgzIC0xMS45MDQ3OSwxNy40MjY3NmMtOC4wNjE1Myw1LjE0MDkzIC0yMC4wOTg1Myw4LjczNDM4IC0zNC42Nzg1NSw4LjczNDM4Yy0xNC41ODAwMSwwIC0yNi42MTcwMiwtMy41OTM0NSAtMzQuNjc4NTUsLTguNzM0MzdjLTguMDYxNTMsLTUuMTQwOTMgLTExLjkwNDc5LC0xMS40NjAwMiAtMTEuOTA0NzksLTE3LjQyNjc2di00LjI5NzJjMCwtMy4wMzMyOSAyLjM0MTcxLC01LjM3NSA1LjM3NSwtNS4zNzV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=" alt="">
                <span id="GoToLogin1" style="margin-top: 4px;">Account</span>

                <img id="openCart" class="imgIcon" src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMwMDAwMDAiPjxwYXRoIGQ9Ik04NiwxMC43NWMtMTcuNzIwNywwIC0zMi4yNSwxNC41MjkzIC0zMi4yNSwzMi4yNWgtMjEuNWMtMi44NTU0NywwIC01LjIwNzAzLDIuMjI1NTggLTUuMzc1LDUuMDgxMDVsLTUuMzc1LDk2Ljc1Yy0wLjA4Mzk4LDEuNDY5NzMgMC40NjE5MiwyLjkzOTQ2IDEuNDY5NzMsMy45ODkyNmMxLjAwNzgxLDEuMDkxOCAyLjQzNTU0LDEuNjc5NjkgMy45MDUyNywxLjY3OTY5aDExOC4yNWMxLjQ2OTczLDAgMi44OTc0NiwtMC41ODc4OSAzLjkwNTI3LC0xLjY3OTY5YzEuMDA3ODEsLTEuMDQ5OCAxLjU1MzcyLC0yLjUxOTUzIDEuNDY5NzMsLTMuOTg5MjZsLTUuMzc1LC05Ni43NWMtMC4xNjc5NywtMi44NTU0NyAtMi41MTk1MywtNS4wODEwNSAtNS4zNzUsLTUuMDgxMDVoLTIxLjVjMCwtMTcuNzIwNyAtMTQuNTI5MjksLTMyLjI1IC0zMi4yNSwtMzIuMjV6TTg2LDIxLjVjMTEuODQxOCwwIDIxLjUsOS42NTgyMSAyMS41LDIxLjVoLTQzYzAsLTExLjg0MTc5IDkuNjU4MjEsLTIxLjUgMjEuNSwtMjEuNXpNMzcuMzMxMDUsNTMuNzVoMTYuNDE4OTV2MjEuNWgxMC43NXYtMjEuNWg0M3YyMS41aDEwLjc1di0yMS41aDE2LjQxODk1bDQuNzQ1MTEsODZoLTEwNi44MjgxMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" alt="">
            </div>
        </div>
    </div>

   

    <!--navbar html start-->
    <div id="header3">
        <ul id="subMenu">
            <li><a href="">Shaving</a>

                <div class="dropBox1" id="shaving">
                    <div class="column1">
                        <a href="">SHAVING APPLIANCES</a>
                        <a href="">Shavers</a>
                        <a href="">Trimmers</a>
                      </div>

                      <div class="column2">
                        <a href="">SHAVING TOOLS & <br>ACCESSORIES</a>
                        <a href="">Razors & Cartridges</a>
                        <a href="">Shaving Brushes</a>
                      </div>
      
                      <div class="column3">
                        <a href="">SHAVING CREAMS & <br>LOTIONS</a>
                        <a href="">Shaving Creams</a>
                        <a href="">Saving Foams,Gels,&Soaps</a>
                        <a href="">Pre Shave & After Shave <br>Lotions</a>
                      </div>


                      <div class="column4">
                        <a href="">SHAVING KITS</a>
                      </div>
                </div>

            </li>
            <li><a href="">Beard Care</a>
                <div class="dropBox1" id="beard">
                    <div class="column1">
                        <a href="">BEARD CARE</a>
                        <a href="">Beard Oil</a>
                        <a href="">Moustache Oil</a>
                        <a href="">Beard Softner</a>
                        <a href="">Beard Colour</a>
                        <a href="">beard Serum</a>
                        <a href="">Beard Cream</a>
                        <a href="">Beard Balm & Butter</a>
                        <a href="">Beard Wash</a>
                        
                      </div>

                      <div class="column2">
                        <a href="">BEARD STYLING</a>
                        <a href="">Beard & Moustache Wax</a>
                        <a href="">Beard Combo</a>
                        <a href="Beard Gel"></a>
                      </div>
      
                      <div class="column3">
                        <a href="">BEARD KITS</a>
                      </div>
                </div>
            </li>
            <li><a href="">Hair</a>
                <div class="dropBox1" id="hair">
                    <div class="column1">
                        <a href="">HAIR CARE</a>
                        <a href="">Shampoo</a>
                        <a href="">Coditioner</a>
                        <a href="">Hair Oils</a>
                      </div>

                      <div class="column2">
                        <a href="">HAIR STYLING</a>
                        <a href="">Hair Gel & Waxes</a>
                        <a href="">Hair Color</a>
                      </div>
      
                      <div class="column3">
                        <a href="">HAIR BRUSHES 7 <br>DRYERS</a>
                        <a href="">Hair brushes & Combs</a>
                        <a href="">Hair Dryers</a>
                      </div>

                      <div class="column4">
                        <a href="">SHOP BY CONCERN</a>
                        <a href="">Razors & Cartridges</a>
                        <a href="">Shaving Brushes</a>
                      </div>
      
                      <div class="column5">
                        <a href="">PROESSIONAL HAIR <br>CARE PRODUCTS</a>
                      </div>
                </div>
            </li>
            <li><a href="product_page.html">Skin Care</a>
                <div class="dropBox1" id="skincare">
                    <div class="column1">
                        <a href="">FACE</a>
                        <a href="">Face Wash</a>
                        <a href="">Moisturizers</a>
                        <a href="">Sunscreens</a>
                        <a href="">Masks & Peels</a>
                        <a href="">Scrubs & Exfoliators</a>
                      </div>

                      <div class="column2">
                        <a href="">MAKEUP FOR MEN</a>
                        <a href="">Primer</a>
                        <a href="">Concealer</a>
                        <a href="">Foundation</a>
                        <a href="">Mattiying Face Powder</a>
                        <a href="">BB & CC Cream</a>
                        <a href="">Brows</a>
                        <a href="">Tools & Brushes</a>
                      </div>
      
                      <div class="column3">
                        <a href="">SKIN CARE KITS</a>
                      </div>

                      <div class="column4">
                        <a href="">SHOP BY CONCERN</a>
                        <a href="">Dry Skin</a>
                        <a href="">Oil Removal</a>
                        <a href="">Acne</a>
                        <a href="">Blackheads</a>
                        <a href="">Tan Removal</a>
                        <a href="">Dark Spots</a>
                      </div>
      
                </div>
            </li>
            <li><a href="">Personal Care</a>
                <div class="dropBox1" id="personal">
                    <div class="column1">
                        <a href="">BATH & BODY</a>
                        <a href="">Bath & Body</a>
                        <a href="">Body Wash / <br>Shower Gels</a>
                        <a href="">Soaps</a>
                        <a href="">Talc & Intimate <br>Care</a>
                        <a href="">Body Lotions</a>
                      </div>

                      <div class="column2">
                        <a href="">HAIR CLIPPERS<br>& BODY<br>GROOMERS</a>
                      </div>

                      <div class="column3">
                        <a href="">DENTAL CARE</a>
                        <a href="">Toothpaste</a>
                        <a href="">Toothbrush</a>
                        <a href="">Floss & Tongue <br>Cleaners</a>
                        <a href="">Mouthwash</a>
                        <a href="">Mouth Freshner</a>
                      </div>
      
                      <div class="column4">
                        <a href="">HAND CARE</a>
                        <a href="">Handwash</a>
                        <a href="">Hand Sanitizer</a>
                        <a href="">Hand Cream</a>
                      </div>

                      <div class="column5">
                        <a href="">FOOT CARE</a>
                        <a href="">Foot Cream</a>
                        <a href="">Foot Scrub</a>
                      </div>

                      <div class="column6">
                        <a href=""></a>
                        <a href="">Safety Essentials</a>
                        <a href="">Masks & Gloves</a>
                        <a href="">Air Freshners</a>
                        <a href="">Household Supplies</a>
                      </div>
                </div>
            </li>
            <li><a href="">Perfumes & Deos</a>
                <div class="dropBox1" id="perfume">
                    <div class="column1">
                        <a href="">PERFUMES(EDT/EDP)</a>
                        <a href="">BODY MIST/SPRAY</a>
                        <a href="">DEODORANTS/ROLL-ONS</a>
                        <a href="">COLOGNES & AFTER SHAVES</a>
                    </div>
                </div>
            </li>
            <li><a href="">Health</a>
              <div class="dropBox1" id="health">
                <div class="column1">
                  <a href="">HEALTH SUPPLIMENTS</a>
                  <a href="">Multivitamins</a>
                  <a href="">Calcium & Vitamin D</a>
                  <a href="">Magnesium & Zinc</a>
                  <a href="">Omega 3 & Fish oil</a>
                  <a href="">Immunity Boosters & Vitamin C</a>
                  <a href="">Melatonin</a>
                  <a href="">Biotin</a>
                  <a href="">Collagen</a>
                  <a href="">Other Suppliments</a>
                </div>
                <div class="column2">
                  <a href="">SPORTS NUTRITION</a>
                  <a href="">Whey Protein</a>
                  <a href="">Whey Isolate Protein</a>
                  <a href="">Plant Protein</a>
                  <a href="">BCAA & Other Muscle Support</a>
                  <a href="">Weigth and Mass Gainers</a>
                </div>
                <div class="column3">
                  <a href="">WEIGTH MANAGEMENT</a>
                  <a href="">Apple Cider Vinegar</a>
                  <a href="">Green Tea</a>
                  <a href="">Green Coffee</a>
                  <a href="">Fat Burners</a>
                  <a href="">Slimming Shakes & Juices</a>
                  <a href="">Sugar Substitutes</a>
                </div>
                <div class="column4">
                  <a href="">HEALTH FOODS</a>
                  <a href="">Dry Fruits, Nuts & Berries</a>
                  <a href="">Edible Seeds</a>
                  <a href="">Black Tea & Coffee</a>
                  <a href="">Herbal Teas</a>
                  <a href="">Breakfast Cereals</a>
                  <a href="">Peanut Butter & Protein Snacks</a>
                  <a href="">Other Health Foods</a>
                </div>
                <div class="column5">
                  <a href="">WELLNESS EQUIPEMENT</a>
                  <a href="">Weighing Scales </a>
                  <a href="">Fitness</a>
                  <a href="">Face Steamers</a>
                  <a href=""><h6>PAIN RELIEF</h6></a>
                  <a href="">Muscles & Joints</a>
                  <a href="">Ortho Oils</a>
                  <a href="">Cough & Cold</a>
                </div>
                <div class="column6">
                  <a href="">AYURVEDA & HERBS</a>
                  <a href="">Ashwagandha </a>
                  <a href="">Neem</a>
                  <a href="">Amla</a>
                  <a href="">Aloe Vera</a>
                  <a href="">Milk Thistle</a>
                  <a href="">Wheatgrass</a>
                  <a href="">Tulsi</a>
                  <a href="">Giloy & Guduchi</a>
                  <a href="">Turmeric</a>
                  <a href="">Spiriluna & Moringa</a>
                  <a href="">Chyavanprash</a>
                  <a href="">Shilajit</a>
                  <a href="">Other Herbal Suppliments</a>
                </div>
                <div class="column7">
                  <a href="">SHOP BY CONCERN</a>
                  <a href="">Diabetes </a>
                  <a href="">Digestion</a>
                  <a href="">Organs-Liver, Heart, Kidney</a>
                  <a href="">Safety & First Aid</a>
                  <a href="">Weakness Vitality</a>
                  <a href="">Mental Wellness</a>
                  <a href="">Blood Pressure</a>
                  <a href="">Hair & Skin Concerns</a>
                </div>
              </div>
            </li>
            <li><a href="">Luxe</a>
              <div class="dropBox1" id="luxe">
                <div class="column1">
                  <a href="">BATH & BODY</a>
                  <a href="">HAIR</a>
                  <a href="">FRAGRANCE</a>
                  <a href="">SKIN</a>
                </div>
            </li>
            <li><a href="">Gadgets & Tech</a>
              <div class="dropBox1" id="gadget">
                <div class="column1">
                  <a href="">HEADPHONES</a>
                  <a href="">SPEAKERS</a>
                  <a href="">SMART WATCHES & ACTIVTY TRACKERS</a>
                  <a href="">COMPUTER PERIPHERALS</a>
                  <a href="">POWER BANKS</a>
                  <a href="">CABLES & CHARGERS</a>
                  <a href="">SMART HOME DEVICES</a>
                  <a href="">CASES & COVERS</a>
                  <a href="">CAMERA ACCESSORIES</a>
  
                </div>
            </li>
            <li><a href="">Lifestyle</a>
              <div class="dropBox1" id="lifestyle">
                <div class="column1">
                  <a href="">FOOT WEARS</a>
                  <a href="">Sneakers</a>
                  <a href="">Flip Flops</a>
                  <a href="">Casual Shoes</a>
                  <a href="">Formal Shoes</a>
                  <a href="">Sports Shoes</a>
                  <a href="">Sandals</a>
                  <a href="">Boots</a>
                  <a href="">Sliders</a>
                  <a href="">Clogs</a>
                </div>
                <div class="column2">
                  <a href="">WATCHES</a>
                  <a href="">Watches</a>
                  <a href="">Smart Watches</a>
                  <a href="">DRINKWARE</a>
                  <a href="">Barware & Bar Essentials</a>
                  <a href="">Flasks & Bottles</a>
                </div>
                <div class="column3">
                  <a href="">ACTIVEWEAR & CLOTHING</a>
                  <a href="">Lounge Wear</a>
                  <a href="">Innerwear</a>
                  <a href="">Briefs & Trunks</a>
                  <a href="">Boxers</a>
                  <a href="">Vests</a>
                  <a href="">Thermals</a>
                  <a href="">Sports Gears & Accessories</a>
                  <a href="">Tshirts</a>
                  <a href="">Jerseys</a>
                </div>
                <div class="column4">
                  <a href="">SPORT ACCESSORIES</a>
                  <a href="">Joggers</a>
                  <a href="">Tracksuits</a>
                  <a href="">Sport Shorts</a>
                  <a href="">Track Pants</a>
                  <a href="">Hoddies & Sweatshirts</a>
                  <a href="">Jackets</a>
                  <a href="">Tank Tops</a>
                  <a href="">Rain Jackets</a>
                </div>
                <div class="column5">
                  <a href="">FASHION ACCESSORIES</a>
                  <a href="">Fashin Accessories </a>
                  <a href="">Wallets</a>
                  <a href="">Belts</a>
                  <a href="">Ties,Cufflinks & Pocket Square</a>
                  <a href="">Caps & Hats</a>
                  <a href="">Socks</a>
                  <a href="">Stationary</a>
                </div>
                <div class="column6">
                  <a href="">BAGS & BAKPACKS</a>
                  <a href="">Bag Packs </a>
                  <a href="">Laptop Bags</a>
                  <a href="">Messenger Bags</a>
                  <a href="">Hand Bags</a>
                  <a href="">Duffle Bags</a>
                  <a href="">Gym Bags</a>
                </div>
              </div>
            </li>
            <li><a href="">petcare</a>
              <div class="dropBox1" id="petcare">
              <div class="column1">
                <a href="">CLEANING & HYGIENE</a>
                <a href="">Shampoos & Conditioners </a>
                <a href="">Grooming Wipes</a>
                <a href="">Shower & Bath Accessories</a>
                <a href="">Dental Care</a>
                <a href="">Tick & Flea Control</a>
                <a href="">Stain Control & Deodorizers</a>
                <a href="">Poopers & Scoopers & Bags</a>
              </div>
              <div class="column2">
                <a href="">PET GROOMINFG</a>
                <a href="">Pet Hair Grooming Tools </a>
                <a href="">HEALTH & WELLNESS</a>
                <a href="">FEEDING & WATER SUPPLIES</a>
               
              </div>
              <div class="column3">
                <a href="">FOOD & TREATS</a>
                <a href="">Dog Food  </a>
                <a href="">Cat Food </a>
                <a href="">Fish Food</a>
                <a href="">Dog Bones</a>
                <a href="">Cookies, Biscuits & Snacks</a>
        
              </div>
              <div class="column4">
                <a href="">PET ACCESSORIES</a>
                <a href="">PET CLOTHING & FASHION</a>
                <a href="">PET TOYS</a>
              </div>
            </div>
            </li>
        </ul>
    </div>
</div>`
    
}

export default navbar