function validate_form ( )
{
    valid = document.SearchForm.SearchKey.value;

        if ( document.SearchForm.SearchKey.value == "" )
        {
                alert ( "Please fill in the 'search value' key." );
                valid = false;
        }
        else
        {
         alert ( "Your 'search value' is " + valid );
        }
        
}