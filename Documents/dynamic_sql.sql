PROCEDURE SP_test IS
    c INTEGER; -- DBMS_SQL cursor handle
    l_desc_t DBMS_SQL.DESC_TAB; -- To hold column descriptions
    l_col_cnt INTEGER; -- Number of columns in the result set
    l_header VARCHAR2(4000); -- To build a header string
    l_value_varchar VARCHAR2(4000); -- For VARCHAR2 and similar types
    l_value_number NUMBER; -- For NUMBER types
    l_value_date DATE; -- For DATE types
    col_type NUMBER; -- To hold the column's data type
    i INTEGER; -- Loop counter

    -- Your dynamic SQL query
    l_query VARCHAR2(4000) := '
    SELECT e.emp_id, e.emp_name, e.hire_date, e.salary, d.dept_name
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    ';
BEGIN
    -- Open a cursor
    c := DBMS_SQL.OPEN_CURSOR;
    DBMS_SQL.PARSE(c, l_query, DBMS_SQL.NATIVE);

    -- Describe the columns in the result set
    DBMS_SQL.DESCRIBE_COLUMNS(c, l_col_cnt, l_desc_t);

    -- Loop through the columns and define them dynamically
    FOR i IN 1 .. l_col_cnt LOOP
        col_type := l_desc_t(i).col_type;

        -- Define the column based on its data type
        IF col_type = 1 THEN -- DBMS_SQL.VARCHAR2 and DBMS_SQL.CHAR map to 1
            DBMS_SQL.DEFINE_COLUMN(c, i, l_value_varchar, 4000);
        ELSIF col_type = 2 THEN -- DBMS_SQL.NUMBER maps to 2
            DBMS_SQL.DEFINE_COLUMN(c, i, l_value_number);
        ELSIF col_type = 12 THEN -- DBMS_SQL.DATE maps to 12
            DBMS_SQL.DEFINE_COLUMN(c, i, l_value_date);
        ELSE
            DBMS_OUTPUT.PUT_LINE('Unhandled column type: ' || col_type);
        END IF;
    END LOOP;

    -- Fetch the rows and process each one
    WHILE DBMS_SQL.FETCH_ROWS(c) > 0 LOOP
        l_header := '"';

        FOR i IN 1 .. l_col_cnt LOOP
            col_type := l_desc_t(i).col_type;

            -- Fetch and concatenate column values based on their type
            IF col_type = 1 THEN -- DBMS_SQL.VARCHAR2 and DBMS_SQL.CHAR
                DBMS_SQL.COLUMN_VALUE(c, i, l_value_varchar);
                l_header := l_header || l_value_varchar;
            ELSIF col_type = 2 THEN -- DBMS_SQL.NUMBER
                DBMS_SQL.COLUMN_VALUE(c, i, l_value_number);
                l_header := l_header || TO_CHAR(l_value_number);
            ELSIF col_type = 12 THEN -- DBMS_SQL.DATE
                DBMS_SQL.COLUMN_VALUE(c, i, l_value_date);
                l_header := l_header || TO_CHAR(l_value_date, 'YYYY-MM-DD');
            ELSE
                l_header := l_header || 'UNKNOWN_TYPE';
            END IF;

            -- Add a comma or close the string
            l_header := l_header || (CASE WHEN i < l_col_cnt THEN '","' ELSE '"' END);
        END LOOP;

        -- Output the concatenated string for this row
        DBMS_OUTPUT.PUT_LINE('Row: ' || l_header);
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