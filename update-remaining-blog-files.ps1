# PowerShell script to replace original blog files with updated versions

# List of updated files
$updatedFiles = @(
    "web-deploy-checklist-updated.md",
    "expo-apk-build-guide-updated.md",
    "react-native-performance-updated.md",
    "mobile-deploy-checklist-updated.md"
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

Write-Host "All remaining blog files have been updated successfully!"