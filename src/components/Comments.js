import React, {useState} from 'react'
import { connect } from "react-redux";
import { addComment, deleteItem } from "../actions";

const Comments = (props) => {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [photo, setPhoto] = useState("")

    return (
      <section className="comments">
        <header><h1>YORUMLAR</h1></header> 

        <div>
          {props.mydata.comments.map((comment) => (
            <div key={Math.random()} className="comment">
              <span >
                  {comment.photo !== "" ? <img src={comment.photo} alt="hatalı link" /> : <div 
                  
                  style={{backgroundColor: comment.backgroundColor }} className="letter">
                    {comment.name.[0].toUpperCase()}
                  </div> }
                
              </span>
              <span>
                <h2>{comment.name}</h2>
                <p>{comment.comment}</p>
              </span>
              <span>
                <button onClick={(e)=>{
                 if (window.confirm("Yorumu silmek istediğinizden emin misiniz?") )
                  {props.deleteItem(comment.id)}}
                  } className="btn btn-danger">Sil</button>
              </span>
            </div>
          ))}
        </div>

        <form className="form">
          <fieldset>
            <legend>Lütfen yorum yapın</legend>
            <div className="form-floating mb-3">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="İsim"
              />
              <label htmlFor="floatingInput">İsim</label>
            </div>

            <div className="form-floating">
              <textarea
              value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">Yorum</label>
            </div>

            <div className="form-floating mb-3">
              <input
                onChange={(e) => setPhoto(e.target.value)}
                value={photo}
                type="name"
                className="form-control"
                id="floatingInput1"
                placeholder="Fotoğraf Linki"
              />
              <label htmlFor="floatingInput1">
                Fotoğraf Linki <small>(İsteğe Bağlı)</small>{" "}
              </label>
            </div>
            <button onClick={(e)=>{
                if (name === "") {
                  alert("Lütfen İsim Giriniz");
                e.preventDefault();}
                else if (comment === "") {
                  alert("Lütfen Yorum Giriniz");
                  e.preventDefault();
                } else{
                    props.addComment(e, name, comment, photo);
                    setName("");
                    setComment("");
                    setPhoto("");
                    e.preventDefault();
                }


            }} className="btn btn-primary" type="submit">
              Gönder
            </button>
          </fieldset>
        </form>
      </section>
    );
}

const mapStateToProps = (state) => {
  return {
    mydata: state,
  };
};

export default connect(mapStateToProps, { addComment, deleteItem })(Comments);


