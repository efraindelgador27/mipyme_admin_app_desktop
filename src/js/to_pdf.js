// https://html2canvas.hertzen.com/

window.jsPDF=window.jspdf.jsPDF;
function toCanvas(){
    html2canvas(document.querySelector("#catalogo")).then(canvas => {        
        let correntCanva=document.getElementById("canvas");

        if(correntCanva.children.length==1){
        correntCanva.replaceChild(canvas,correntCanva.children[0])  //appendChild(canvas)
        }else{
            correntCanva.appendChild(canvas);
        }
    });
    limpiar()
}

function toPDF(){
    try{
        
        let jsPdf = jsPDF('p', 'pt', 'letter');
        var htmlElement = document.getElementById("canvas");//document.getElementById('canvas');
        // you need to load html2canvas (and dompurify if you pass a string to html)
        const opt = {
            callback: function (jsPdf) {
                jsPdf.save("Test.pdf");
                // to open the generated PDF in browser window
                // window.open(jsPdf.output('bloburl'));
            },
            margin: [0,0,0,0],
            autoPaging: 'text',
            html2canvas: {
                allowTaint: true,
                dpi: 300,
                letterRendering: true,
                logging: false,
                scale: .720
            }
        };
    
        jsPdf.html(htmlElement, opt);       
   
    }catch(e){
        alert(e)
    };
}

function test(id){
    const canvas= toCanvas();
    toPDF(canvas);
    
}

function test2()
  {
    console.log("... GENERANDO")
   html2canvas(document.querySelector("#catalogo"),{
   onrendered:function(canvas){
   // var img=canvas.toDataURL("image/png");
   
   var img=canvas.toDataURL("./img/productos/Alfajor Marplatense .jpeg");
   var doc = new jsPDF();
   doc.addImage(img,'JPEG',20,20);
   doc.save('test.pdf');
   }

   });

  }

 