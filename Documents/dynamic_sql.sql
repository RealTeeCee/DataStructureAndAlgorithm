PROCEDURE SP_test IS
    c INTEGER; -- DBMS_SQL cursor handle
    l_desc_t DBMS_SQL.DESC_TAB; -- To hold column descriptions
    l_col_cnt INTEGER; -- Number of columns in the result set
    l_header VARCHAR2(4000); -- To build a header string
    l_value VARCHAR2(4000); -- To fetch each column value
    i INTEGER; -- Loop counter

    -- Your dynamic SQL query
    l_query VARCHAR2(4000) := '
    SELECT e.emp_id, e.emp_name, d.dept_name
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    WHERE e.emp_salary > 50000
    ';
BEGIN
    -- Open a cursor
    c := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(c, l_query, DBMS_SQL.NATIVE);

    -- Describe the columns in the result set
    DBMS_SQL.DESCRIBE_COLUMNS(c, l_col_cnt, l_desc_t);

    -- Loop through the columns and define them dynamically
    FOR i IN 1 .. l_col_cnt LOOP
        DBMS_SQL.DEFINE_COLUMN(c, i, l_value, 4000);
    END LOOP;

    -- Fetch the rows and process each one
    WHILE DBMS_SQL.FETCH_ROWS(c) > 0 LOOP
        l_header := '"';
        FOR i IN 1 .. l_col_cnt LOOP
            DBMS_SQL.COLUMN_VALUE(c, i, l_value);
            l_header := l_header || l_value || (CASE WHEN i < l_col_cnt THEN '","' ELSE '"' END);
        END LOOP;

        -- Output the concatenated string for this row
        DBMS_OUTPUT.PUT_LINE(l_header);
    END LOOP;

    -- Close the cursor
    DBMS_SQL.CLOSE_CURSOR(c);
EXCEPTION
    WHEN OTHERS THEN
        -- Ensure cursor is closed even if an error occurs
        IF DBMS_SQL.IS_OPEN(c) THEN
            DBMS_SQL.CLOSE_CURSOR(c);
        END IF;
        RAISE;
END SP_test;