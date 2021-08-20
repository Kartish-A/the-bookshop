import React from 'react'

export default function SearchArea(props) {
    return (
        <div className='search-area'>
            <form
                className='form-group'
                onSubmit={props.searchBooks}>

                <input
                    className='form-control'
                    type='text'
                    placeholder='search Books'
                    onChange={props.handleSearch} />

                <button
                    type='submit'
                    className='btn btn-secondary'>
                    Search
                </button>

                <select
                    className="custom-select "
                    defaultValue='Sort'
                    onChange={props.handleSort}>
                    <option disabled value='Sort'>sort...</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>

            </form>
        </div>
    )
}
