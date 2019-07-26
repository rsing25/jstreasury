

// imp only one &

diff file1.txt file2.txt >/dev/null 2>&1 & echo "Files are the different"




if diff file1.txt file2.txt >/dev/null 2>&1
then
    echo "Files are the same"
else
    echo "Files are different"
fi