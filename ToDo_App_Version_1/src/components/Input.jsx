export default function Input(){
    return(<div className="space-x-5 my-5">
        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <button className="btn btn-success">Add Task</button>
    </div>)
}