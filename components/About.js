import { useState } from "react";
import User from "./User";

const userobj = [
    {
        img: "./main.jpeg",
        name: "haney",
        location: "surat",
        contact: "7473840293",
    },
    {
        name: "raj",
        location: "surat",
        contact: "12892382398",
    },
    {
        name: "patel",
        location: "surat",
        contact: "03039393939",
    },
    {
        name: "raj",
        location: "surat",
        contact: "12892382398",
    },
    {
        name: "raj",
        location: "surat",
        contact: "12892382398",
    },
    {
        name: "raj",
        location: "surat",
        contact: "12892382398",
    },
    {
        name: "raj",
        location: "surat",
        contact: "12892382398",
    }
];

const About = () => {
    const [searchname, setname] = useState('');
    const [filteredData, setFilteredData] = useState(userobj);

    const handleSearch = () => {
        if (searchname.trim() === '') {
            setFilteredData(userobj);
        } else {
            const newdata1 = userobj.filter((e) =>
                e.name.toLowerCase().includes(searchname.toLowerCase())
            );
            setFilteredData(newdata1);
        }
    };

    return (
        <div className="aboutus">
            <div className="search-user">
                <input
                    type="text"
                    value={searchname}
                    onChange={(e) => setname(e.target.value)}
                />
            </div>

            <div className="btn-search">
                <button onClick={handleSearch}>
                    Search by Name
                </button>
            </div>

            <div className="user-container">
                {filteredData.map((res, id) => (
                    <User key={id} userdata={res} />
                ))}
            </div>
        </div>
    );
};

export default About;
