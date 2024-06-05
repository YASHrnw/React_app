
export default function Array() {

    // Q1 // 
    const circleArea = (radius) => Math.PI * radius ** 2;
    const rectangleArea = (length, width) => length * width;
    const triangleArea = (base, height) => 0.5 * base * height;






    return (
        <>
            <ul>
                <h1>Q1: Find area.</h1>
                <br />
                <li>Area of Circle:- {circleArea(5)}</li><br />
                <li>Area of Rectangl:- {rectangleArea(5, 8)}</li><br />
                <li>Area of Tringle:-   {triangleArea(4, 5)}</li>
                <br /><br />
            </ul>
        </>
    )
}
