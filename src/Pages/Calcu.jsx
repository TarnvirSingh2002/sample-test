import React, { useContext } from 'react'
import { context } from '../main';
import { jsPDF} from "jspdf"

export default function Calcu() {

    const {day, re, time, bill} = useContext(context);

    const generate=async()=>{
        const response= await fetch('http://localhost:5000/api/use/getall');
        const result=await response.json();
        result.sort((a, b) => b.billAmount - a.billAmount);
        console.log(result);

            const doc = new jsPDF();
            // Title
            doc.setFontSize(20);
            doc.text('Library Data', 14, 22);
        
            // Adding data to the PDF
            doc.setFontSize(12);
            let y = 30; // Initial vertical position
            result.forEach((item) => {

              doc.text(`bookId: ${item.bookId}`, 14, y);
              y += 10;
              if (y > 270) { // If y exceeds a certain value (close to the bottom of the page)
                doc.addPage(); // Add a new page
                y = 20; // Reset y position for the new page
            }

              doc.text(`bookTitle: ${item.bookTitle}`, 14, y );
              y += 10;
              if (y > 270) { // If y exceeds a certain value (close to the bottom of the page)
                doc.addPage(); // Add a new page
                y = 20; // Reset y position for the new page
            }

              doc.text(`contact: ${item.contact}`, 14, y);
              y += 10;
              if (y > 270) { // If y exceeds a certain value (close to the bottom of the page)
                doc.addPage(); // Add a new page
                y = 20; // Reset y position for the new page
            }

              doc.text(`name: ${item.name}`, 14, y);
              y += 10;
              if (y > 270) { // If y exceeds a certain value (close to the bottom of the page)
                doc.addPage(); // Add a new page
                y = 20; // Reset y position for the new page
            }

              doc.text(`billAmount: ${item.billAmount}`, 14, y );
              y += 20;
              if (y > 270) { // If y exceeds a certain value (close to the bottom of the page)
                doc.addPage(); // Add a new page
                y = 20; // Reset y position for the new page
            }

            });
        
            // Save the PDF with a filename
            doc.save('library_data.pdf');
    };
  return (
    <div>
        <table style={{border:"2px solid black"}}>
            <caption>T.S Liberary</caption>
            <thead>
            <tr>
                <th>items</th>
                <th>information</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Borrow date</td>
                <td>{day}</td>
            </tr>
            <tr>
                <td>Return date</td>
                <td>{re}</td>
            </tr>
            <tr>
                <td>Total time</td>
                <td>{time}</td>
            </tr>
            <tr>
                <td>Total bill</td>
                <td>{bill}</td>
            </tr>
            </tbody>     
        </table>
        <div onClick={generate}style={{height:"80px",width:"80px",backgroundColor:"blue"}}>Click me</div>
      
    </div>
  )
}
