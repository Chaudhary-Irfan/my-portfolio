# PowerShell script to replace original blog files with improved versions

# List of files to update
$filesToUpdate = @(
    "expo-apk-build-guide",
    "firebase-firestore",
    "react-native-performance"
)

# Base directory for blog files
$blogDir = "c:\Users\chaudhary.irfan\Portfolio\src\components\content\blogs"

# Loop through each file and replace the original with the improved version
foreach ($file in $filesToUpdate) {
    $originalFile = "$file.md"
    $improvedFile = "$file-improved.md"
    $originalPath = Join-Path -Path $blogDir -ChildPath $originalFile
    $improvedPath = Join-Path -Path $blogDir -ChildPath $improvedFile
    
    # Check if both files exist
    if ((Test-Path -Path $originalPath) -and (Test-Path -Path $improvedPath)) {
        # Create backup of original file
        $backupPath = "$originalPath.bak"
        Copy-Item -Path $originalPath -Destination $backupPath -Force
        
        # Replace original with improved file
        Copy-Item -Path $improvedPath -Destination $originalPath -Force
        
        # Remove the improved file
        Remove-Item -Path $improvedPath -Force
        
        Write-Host "Replaced $originalFile with improved version"
    } else {
        Write-Host "Could not update $originalFile - one or both files missing"
    }
}

Write-Host "Blog files update completed!"