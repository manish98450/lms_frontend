import {Link} from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

function AddCourse(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <TeacherSidebar />
                </aside>

                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Title</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div>
                                <label for="formFileLg" className="form-label">Course Video</label>
                                <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Technologies</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                    
                </section>
            </div>
        </div>
    );
}

export default AddCourse;