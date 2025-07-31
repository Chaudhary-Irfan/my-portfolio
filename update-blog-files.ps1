# PowerShell script to replace original blog files with updated versions

# List of updated files
$updatedFiles = @(
    "chatgpt-for-developers-updated.md",
    "firebase-firestore-updated.md",
    "mui-grid-mastery-updated.md",
    "react-best-practices-updated.md",
    "supabase-vs-firebase-updated.md"
)

# Base directory for blog files
$blogDir = "c:\Users\chaudhary.irfan\Portfolio\src\components\content\blogs"

# Loop through each updated file and replace the original
foreach ($file in $updatedFiles) {
    $originalFile = $file -replace "-updated", ""
    $originalPath = Join-Path -Path $blogDir -ChildPath $originalFile
    $updatedPath = Join-Path -Path $blogDir -ChildPath $file
    
    # Create backup of original file
    $backupPath = $originalPath + ".bak"
    Copy-Item -Path $originalPath -Destination $backupPath -Force
    
    # Replace original with updated file
    Copy-Item -Path $updatedPath -Destination $originalPath -Force
    
    # Remove the updated file
    Remove-Item -Path $updatedPath -Force
    
    Write-Host "Replaced $originalFile with updated version"
}

Write-Host "All blog files have been updated successfully!"